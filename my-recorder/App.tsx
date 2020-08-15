import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  PermissionsAndroid,
} from "react-native";
import AudioRecorderPlayer, {
  AudioSet,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
} from "react-native-audio-recorder-player";

export default function App() {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const path = Platform.select({
    ios: "hello.m4a",
    android: "sdcard/hello.mp4",
  });

  const onStartRecord = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Permissions for write access",
            message: "Give permission to your storage to write a file",
            buttonPositive: "ok",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the storage");
        } else {
          console.log("permission denied");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: "Permissions for write access",
            message: "Give permission to your storage to write a file",
            buttonPositive: "ok",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
        } else {
          console.log("permission denied");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    const path = Platform.select({
      ios: "hello.m4a",
      android: "sdcard/hello.mp4",
    });
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log("audioSet", audioSet);
    const uri = await audioRecorderPlayer.startRecorder(path, true, audioSet);
    audioRecorderPlayer.addRecordBackListener((e: any) => {
      console.log({
        recordSecs: e.current_position,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      });
    });
    console.log(`uri: ${uri}`);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    console.log({
      recordSecs: 0,
    });
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Button title="Start Record" onPress={onStartRecord} />
      <Button title="Stop Record" onPress={onStopRecord} />

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
