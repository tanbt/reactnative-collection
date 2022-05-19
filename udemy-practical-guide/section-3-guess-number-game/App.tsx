import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={s.root}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
  },
});
