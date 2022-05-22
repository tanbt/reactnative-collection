import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";

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

  function resetGame() {

  }

  return (
    <View style={s.rootContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          <InstructionText style={s.instructionText}>
            Higher or lower?
          </InstructionText>
          <View style={s.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(Direction.HIGHER)}>
              +
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler(Direction.LOWER)}>
              -
            </PrimaryButton>
          </View>
          <View style={s.buttonContainer}>
            <PrimaryButton onPress={showHint}>Hint</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const s = StyleSheet.create({
  rootContainer: {
    flext: 1,
    marginTop: 100,
    marginHorizontal: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  instructionText: {
    marginBottom: 20,
    fontSize: 20,
  },
});
