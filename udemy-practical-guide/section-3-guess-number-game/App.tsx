import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
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

const bgImg: ImageRequireSource = require("./assets/background.png");

export default function App() {
  const [userNumber, setUserNumber] = useState<string>();
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  function resetGame() {
    setUserNumber("");
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
    currentScreen = <GameOver />;
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
            <PrimaryButton onPress={resetGame}>Reset Game</PrimaryButton>
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
