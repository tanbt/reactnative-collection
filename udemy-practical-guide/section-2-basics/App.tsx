import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);

  function handleAddGoal() {
    setGoals([...goals, goalInput]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal..."
          defaultValue={goalInput}
          onChangeText={setGoalInput}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
        {/* <FlatList data={goals} renderItem={(ri) => <Text>{ri.item}</Text>} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 20,
    flexDirection: "column",
  },
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
  goalsContainer: {
    borderTopColor: "#DDDDDD",
  },
});
