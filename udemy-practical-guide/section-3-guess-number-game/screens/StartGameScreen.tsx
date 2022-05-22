import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
import { Colors } from "../util/constants";

interface StartGameScreenProps {
  onEnterNumber: (text: string) => void;
}

export function StartGameScreen({ onEnterNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  function setInputValue(text: string) {
    setEnteredNumber(text);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Got it!", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onEnterNumber(enteredNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setInputValue}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonElement}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonElement}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flext: 1,
    marginTop: 100,
    marginHorizontal: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonElement: {
    flex: 1,
  },
});
