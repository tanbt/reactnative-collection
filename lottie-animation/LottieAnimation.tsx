import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function LottieAnimation() {
  const animation = useRef<any>(null);
  useEffect(() => {
    setTimeout(() => {
      animation.current?.play();
    }, 1000);
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./assets/PoliteChicky.json")}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
        <Button
          title="Stop"
          onPress={() => {
            animation.current?.pause();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
