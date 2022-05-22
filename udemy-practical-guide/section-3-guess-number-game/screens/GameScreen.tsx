import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
import { Ionicons } from "@expo/vector-icons";

enum Direction {
  LOWER,
  HIGHER,
}

interface GameScreenProps {
  userNumber: number;
  onGameOver: Function;
  setGuessRounds: Function;
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

export function GameScreen({
  userNumber,
  onGameOver,
  setGuessRounds,
}: GameScreenProps) {
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );

  useEffect(() => {
    minBoundary = 1;
    maxBoundary: 100;
  }, []);
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
    setGuessRounds(1);
  }

  function showHint() {
    Alert.alert("Hint", "Your number is: " + userNumber, [
      { text: "Got it", style: "destructive" },
    ]);
  }

  function resetGame() {}

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
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler(Direction.LOWER)}>
              {<Ionicons name="md-remove" size={24} />}
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
