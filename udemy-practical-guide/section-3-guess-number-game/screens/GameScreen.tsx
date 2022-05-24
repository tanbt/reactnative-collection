import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import { GuessLogItem } from "../components/GuessLogItem";

enum Direction {
  LOWER,
  HIGHER,
}

interface GameScreenProps {
  userNumber: number;
  onGameOver: (roundCount: number) => void;
}

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  let rndNum = -1;
  while (rndNum < min || rndNum > max || rndNum === exclude) {
    if (min === max) return min;
    rndNum = Math.floor(Math.random() * 100);
  }
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 99;

export function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const { width, height } = useWindowDimensions();
  const rootMarginTop = height < 700 ? 15 : 100;

  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary: 99;
  }, []);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
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
    setGuessRounds([...guessRounds, newRndNumber]);
  }

  function showHint() {
    Alert.alert("Hint", "Your number is: " + userNumber, [
      { text: "Got it", style: "destructive" },
    ]);
  }

  let content = (
    <>
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

      <View style={s.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(item) => (
            <GuessLogItem guess={item.item} round={item.index} />
          )}
        ></FlatList>
      </View>
    </>
  );

  if (width >= 768) {
    content = (
      <View style={s.landscapeContent}>
        <View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <InstructionText style={s.instructionText}>
            Higher or lower?
          </InstructionText>
          <PrimaryButton onPress={() => nextGuessHandler(Direction.HIGHER)}>
            <Ionicons name="md-add" size={24} />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler(Direction.LOWER)}>
            {<Ionicons name="md-remove" size={24} />}
          </PrimaryButton>
          <PrimaryButton onPress={showHint}>Hint</PrimaryButton>
        </View>

        <View style={s.landscapeLog}>
          <InstructionText style={s.instructionText}>
            Your steps:
          </InstructionText>
          <FlatList
            data={guessRounds}
            renderItem={(item) => (
              <GuessLogItem guess={item.item} round={item.index} />
            )}
          ></FlatList>
        </View>
      </View>
    );
  }

  return (
    <View style={[s.rootContainer, { marginTop: rootMarginTop }]}>
      <Title>Opponent's Guess</Title>
      {content}
    </View>
  );
}

const s = StyleSheet.create({
  landscapeContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  landscapeLog: {
    maxWidth: "40%",
    maxHeight: "80%"
  },
  rootContainer: {
    flext: 1,
    marginHorizontal: 24,
    flexDirection: "column",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  instructionText: {
    marginBottom: 20,
    fontSize: 20,
  },
  listContainer: {
    // flex: 1,
    height: "45%",
    padding: 16,
  },
});
