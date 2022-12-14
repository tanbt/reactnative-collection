import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LottieAnimation from "./LottieAnimation";
import LottieBackground from "./LottieBackground";

const Animation = {
  chicky: require("./assets/PoliteChicky.json"),
  noBoxes: require("./assets/no-boxes.json"),
  noAchievement: require("./assets/no-achievements.json"),
  noPayment: require("./assets/no-payment-methods.json"),
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <LottieAnimation src={Animation.chicky} />
      <LottieAnimation src={Animation.noBoxes} />
      <LottieAnimation src={Animation.noAchievement} />
      <LottieAnimation src={Animation.noPayment} />
    </View>
    // <LottieBackground />
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
