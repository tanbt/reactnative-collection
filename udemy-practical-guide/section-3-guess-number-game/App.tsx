import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ImageBackground,
  ImageRequireSource,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { PrimaryButton } from "./components/PrimaryButton";
import { GameOver } from "./screens/GameOver";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";
import { Colors } from "./util/constants";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const bgImg: ImageRequireSource = require("./assets/background.png");

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [userNumber, setUserNumber] = useState<string>();
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const [roundCount, setRoundCount] = useState<number>(0);

  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return null;
  }

  function gameOverHandler(count: number) {
    setIsGameOver(true);
    setRoundCount(count);
  }

  function restartGame() {
    setUserNumber("");
    setRoundCount(0);
    setIsGameOver(false);
  }

  let currentScreen = userNumber ? (
    <GameScreen
      userNumber={parseInt(userNumber)}
      onGameOver={gameOverHandler}
    />
  ) : (
    <StartGameScreen onEnterNumber={setUserNumber} />
  );
  if (isGameOver) {
    currentScreen = (
      <GameOver userNumber={userNumber} roundNumber={roundCount} />
    );
  }

  return (
    <LinearGradient colors={["#4e0329", Colors.accent500]} style={s.root}>
      {/* @ts-ignore */}
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={s.root}
        imageStyle={s.bgImage}
      >
        <SafeAreaView style={s.root}>
          {currentScreen}
          <View style={s.contextBtn}>
            <PrimaryButton onPress={restartGame}>Restart Game</PrimaryButton>
          </View>
        </SafeAreaView>
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
  contextBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
