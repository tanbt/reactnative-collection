import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, ImageRequireSource, StyleSheet } from "react-native";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";

const bgImg: ImageRequireSource = require("./assets/background.png");

export default function App() {
  const [userNumber, setUserNumber] = useState<string>();

  const currentScreen = userNumber ? (
    <GameScreen />
  ) : (
    <StartGameScreen onEnterNumber={setUserNumber} />
  );

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={s.root}>
      {/* @ts-ignore */}
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={s.root}
        imageStyle={s.bgImage}
      >
        {currentScreen}
      </ImageBackground>
    </LinearGradient>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});
