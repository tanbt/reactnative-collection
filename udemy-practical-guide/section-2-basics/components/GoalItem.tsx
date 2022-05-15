import { StyleSheet, Text } from "react-native";

export interface GoalItem {
  id?: string;
  text: string;
}

export function GoalItem(props: GoalItem) {
  return <Text style={styles.goalItem}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#AAF",
    borderRadius: 3,
  },
});
