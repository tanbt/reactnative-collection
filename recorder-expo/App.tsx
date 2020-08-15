import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";
import * as Permissions from "expo-permissions";

export default function App() {
  const [isAllowRecord, setAllowRecord] = useState(false);

  const recordingSettings = JSON.parse(
    JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
  );

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    _askForPermissions();
  });

  async function _askForPermissions() {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    setAllowRecord(response.status === "granted");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Button title="start record" onPress={} />
      <Button title="stop record" onPress={} />

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
