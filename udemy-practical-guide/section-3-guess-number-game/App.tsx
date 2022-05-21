import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ImageBackground,
  ImageRequireSource,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";
import { Colors } from "./util/constants";

const bgImg: ImageRequireSource = require("./assets/background.png");

export default function App() {
  const [userNumber, setUserNumber] = useState<string>();

  const currentScreen = userNumber ? (
    <GameScreen userNumber={parseInt(userNumber)} />
  ) : (
    <StartGameScreen onEnterNumber={setUserNumber} />
  );

  return (
    <LinearGradient colors={["#4e0329", Colors.accent500]} style={s.root}>
      {/* @ts-ignore */}
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={s.root}
        imageStyle={s.bgImage}
      >
        <SafeAreaView style={s.root}>{currentScreen}</SafeAreaView>
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
