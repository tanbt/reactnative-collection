import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";
import * as Permissions from "expo-permissions";
import { RecordingStatus } from "expo-av/build/Audio";

export default function App() {
  const [isAllowRecord, setAllowRecord] = useState("No");
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>();

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    _askForPermissions();
  });

  async function _askForPermissions() {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    setAllowRecord(response.status);
  }

  let recording = new Audio.Recording();
  let currentRecordingStatus;
  async function _startRecording() {
    await recording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
    );

    await recording.startAsync();
    setRecordingStatus(await recording.getStatusAsync());

    recording.setOnRecordingStatusUpdate((status: RecordingStatus) =>
      setRecordingStatus(status)
    );
  }

  // bug: https://github.com/expo/expo/issues/1709
  async function _stopRecording() {
    try {
      console.log("stopping 1...");
      currentRecordingStatus = await recording.stopAndUnloadAsync();
      setRecordingStatus(currentRecordingStatus);

      console.log(`Recorded URI: ${recording.getURI()}`);
      //const info = await FileSystem.getInfoAsync(this.recording.getURI());
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
