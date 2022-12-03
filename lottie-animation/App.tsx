import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LottieAnimation from "./LottieAnimation";
import LottieBackground from "./LottieBackground";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <LottieAnimation />
    // </View>
    <LottieBackground />
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
