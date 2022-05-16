import { Pressable, StyleSheet, Text } from "react-native";

export interface GoalItem {
  id: string;
  text: string;
}

interface GoalItemProps {
  item: GoalItem;
  onItemPress: (id: string) => void;
}

export function GoalItem(props: GoalItemProps) {
  const { id, text } = props.item;

  return (
    <Pressable onPress={() => props.onItemPress(id)}>
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#AAF",
    borderRadius: 3,
  },
});
