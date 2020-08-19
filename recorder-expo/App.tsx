import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";
import * as Permissions from "expo-permissions";

export default function App() {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [isAllowRecord, setAllowRecord] = useState("No");
  const [recordingStatus, setRecordingStatus] = useState<Audio.RecordingStatus>();

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    _askForPermissions();
  });

  async function _askForPermissions() {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    setAllowRecord(response.status);
  }

  let currentRecordingStatus;
  async function _startRecording() {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: true,
    }); // <= setting for IOS

    const newRrecording = new Audio.Recording();
    setRecording(newRrecording);

    await newRrecording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
    );

    newRrecording.setOnRecordingStatusUpdate((status: Audio.RecordingStatus) =>
      setRecordingStatus(status)
    );

    await newRrecording.startAsync();
  }

  async function _stopRecording() {
    if (!recording) {
      console.log("You are not recording.")
      return;
    }

    try {
      currentRecordingStatus = await recording.stopAndUnloadAsync();
      setRecordingStatus(currentRecordingStatus);
      console.log(`Recorded URI: ${recording.getURI()}`);
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Button title="start record" onPress={_startRecording} />
      <Button title="stop record" onPress={_stopRecording} />

      <View>
        <Text>Recording permission: {isAllowRecord} </Text>
        <Text style={{ fontSize: 15 }}>
          Can record: {recordingStatus?.canRecord ? "Yes" : "No"}
        </Text>
        <Text>Is recording: {recordingStatus?.isRecording ? "Yes" : "No"}</Text>
        <Text>
          Is done recording: {recordingStatus?.isDoneRecording ? "Yes" : "No"}
        </Text>
        <Text>Recording time: {recordingStatus?.durationMillis}</Text>
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
});
