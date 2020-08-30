import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as Device from "expo-device";

export default function App() {
  const [recording, setRecording] = useState<Audio.Recording | null>();
  const [sound, setSound] = useState<Audio.Sound | null>();
  const [isAllowRecord, setAllowRecord] = useState("No");
  const [recordingStatus, setRecordingStatus] = useState<
    Audio.RecordingStatus
  >();

  const [transcript, setTranscript] = useState(
    "(Finish a recording to see its transcript...)"
  );

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    _askForPermissions();
  });

  async function _askForPermissions() {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    setAllowRecord(response.status);
  }

  async function _startRecording() {
    if (sound) {
      setSound(null);
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    }); // <= important for IOS

    const newRrecording = new Audio.Recording();
    setRecording(newRrecording);

    const recordingOptions = {
      // android not currently in use, but parameters are required
      android: {
        extension: ".m4a",
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB,
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 64000,
      },
      ios: {
        extension: ".wav",
        // outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB,
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM,
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 64000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
      },
    };
    await newRrecording.prepareToRecordAsync(recordingOptions);

    newRrecording.setOnRecordingStatusUpdate((status: Audio.RecordingStatus) =>
      setRecordingStatus(status)
    );

    await newRrecording.startAsync();
  }

  async function _stopRecording() {
    if (!recording) {
      console.log("You are not recording.");
      return;
    }
    try {
      await recording.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    setSound(sound);

    await getTranscript(recording);
  }

  function _playRecorded() {
    if (!sound) {
      console.log("You don't have a record.");
      return;
    }
    sound.playAsync();
  }

  async function getTranscript(recording: Audio.Recording) {
    const restAPI =
      "https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyAqfRQcqG0nJF90EGUziIQq4IAHfcmlKkE";
    const info = await FileSystem.getInfoAsync(recording.getURI() || "");
    console.log(`FILE INFO: ${JSON.stringify(info)}`);
    const audioString = await FileSystem.readAsStringAsync(
      recording.getURI() || "",
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );
    const response = await fetch(restAPI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer <token>'
      },
      body: JSON.stringify({
        config: {
          encoding: Device.osName == "iOS" ? "LINEAR16" : "AMR_WB",
          sampleRateHertz: 16000,
          languageCode: "en-US",
        },
        audio: {
          content: audioString,
        },
      }),
    });

    const json = await response.json();
    try {
      setTranscript(json.results[0].alternatives[0].transcript);
    } catch (error) {
      console.log(json);
      setTranscript("Failed to listen. Please try again...");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.marginBottom10}>
        <Button title="start record" onPress={_startRecording} />
      </View>
      <View style={styles.marginBottom10}>
        <Button title="stop record" onPress={_stopRecording} />
      </View>
      <View style={styles.marginBottom10}>
        <Button
          disabled={!sound}
          title="play recorded"
          onPress={_playRecorded}
        />
      </View>
      <Text>
        Is recording:{" "}
        {recordingStatus?.isRecording
          ? "Yes (" + recordingStatus?.durationMillis + ")"
          : "No"}
      </Text>

      {/* <View>
        <Text>Recording permission: {isAllowRecord} </Text>
        <Text style={{ fontSize: 15 }}>
          Can record: {recordingStatus?.canRecord ? "Yes" : "No"}
        </Text>
        <Text>
          Is done recording: {recordingStatus?.isDoneRecording ? "Yes" : "No"}
        </Text>
        <Text>Recording time: {recordingStatus?.durationMillis}</Text>
      </View> */}

      <View>
        <Text>{transcript}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  marginBottom10: {
    marginBottom: 10,
  },
});
