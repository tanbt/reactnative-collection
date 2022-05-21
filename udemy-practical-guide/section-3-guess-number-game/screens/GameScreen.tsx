import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
import { GameOver } from "./GameOver";

enum Direction {
  LOWER,
  HIGHER,
}

interface GameScreenProps {
  userNumber: number;
  onGameOver: Function;
}

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(1, 100, userNumber)
  );

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess]);

  function nextGuessHandler(direction: Direction) {
    if (
      (direction === Direction.LOWER && currentGuess < userNumber) ||
      (direction === Direction.HIGHER && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Wrong direction!",
        "Try to remember your number and give correct direction...",
        [{ text: "Try again" }]
      );
      return;
    }

    if (direction === Direction.LOWER) {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  function showHint() {
    Alert.alert("Hint", "Your number is: " + userNumber, [
      { text: "Got it", style: "destructive" },
    ]);
  }

  return (
    <View style={s.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler(Direction.HIGHER)}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler(Direction.LOWER)}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={showHint}>Hint</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 30,
  },
});
