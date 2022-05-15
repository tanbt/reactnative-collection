import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export interface iGoalInput {
  handleAddGoal: (goal: string) => void;
}

export function GoalInput({ handleAddGoal }: iGoalInput) {
  const [goalInput, setGoalInput] = useState<string>("");

  function onAddGoal() {
    if (goalInput !== "") {
      handleAddGoal(goalInput);
      setGoalInput("");
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goal..."
        value={goalInput}
        onChangeText={setGoalInput}
      />
      <Button title="Add Goal" onPress={onAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
});
