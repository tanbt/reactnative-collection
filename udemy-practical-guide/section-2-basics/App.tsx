import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

const sampleData = [
  { id: "1", text: "Goal 1" },
  { id: "2", text: "Goal 2" },
  { id: "3", text: "Goal 3" },
];

export default function App() {
  const [goals, setGoals] = useState<GoalItem[]>(sampleData);
  const [addGoalVisible, setAddGoalVisible] = useState<boolean>(false);

  function handleAddGoal(goalInput: string) {
    setGoals([
      ...goals,
      {
        id: Math.random().toString(),
        text: goalInput,
      },
    ]);
    setAddGoalVisible(false);
  }

  function handleDeleteGoal(id: string) {
    setGoals(goals.filter((g) => g.id !== id));
  }

  function toggleAddGoalModal() {
    setAddGoalVisible(!addGoalVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Button title="Add Goal" onPress={toggleAddGoalModal} />
      <GoalInput
        visible={addGoalVisible}
        handleAddGoal={handleAddGoal}
        cancelAddGoal={toggleAddGoalModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => item.id ?? "0"}
          renderItem={(ri) => (
            <GoalItem item={ri.item} onItemPress={handleDeleteGoal} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 40,
    flexDirection: "column",
  },
  goalsContainer: {
    borderTopColor: "#DDDDDD",
  },
});
