import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Text,
  Image,
} from "react-native";

export interface GoalInputProps {
  visible: boolean;
  handleAddGoal: (goal: string) => void;
  cancelAddGoal: Function;
}

export function GoalInput({
  visible = false,
  handleAddGoal,
  cancelAddGoal,
}: GoalInputProps) {
  const [goalInput, setGoalInput] = useState<string>("");

  function onAddGoal() {
    if (goalInput !== "") {
      handleAddGoal(goalInput);
      setGoalInput("");
    }
  }

  function onCancel() {
    cancelAddGoal();
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal..."
          value={goalInput}
          onChangeText={setGoalInput}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={onAddGoal} />
          <Text> </Text>
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    paddingTop: "20%",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    margin: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
});
