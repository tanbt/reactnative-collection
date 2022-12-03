import React, { useRef, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import LottieView from "lottie-react-native";

export default function LottieBackground() {
  const [name, setName] = useState<string>("");
  const animation = useRef<any>(null);
  useEffect(() => {
    setTimeout(() => {
      animation.current?.play();
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text>Enter your name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
        />
        {!!name && <Text>Hello, {name}!</Text>}
      </View>
      <LottieView
        ref={animation}
        style={styles.lottieView}
        source={require("./assets/PoliteChicky.json")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lottieView: {
    flex: 1,
    backgroundColor: "#ffe4b3",
  },
  content: {
    zIndex: 9999,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    padding: 10,
    width: "50%",
  },
});
