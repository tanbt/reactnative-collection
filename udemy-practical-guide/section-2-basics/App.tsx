import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState<GoalItem[]>([]);

  function handleAddGoal(goalInput: string) {
    setGoals([
      ...goals,
      {
        id: Math.random().toString(),
        text: goalInput,
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <GoalInput handleAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => item.id ?? "0"}
          renderItem={(ri) => <GoalItem text={ri.item.text} />}
        />
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
  goalsContainer: {
    borderTopColor: "#DDDDDD",
  },
});
