import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../util/constants";

interface GuessLogItemProps {
  round: number;
  guess: number;
}

export function GuessLogItem({ round, guess }: GuessLogItemProps) {
  return (
    <View style={s.listItem}>
      <Text style={s.itemText}>#{round}</Text>
      <Text style={s.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginTop: 6,
    marginVertical: 3,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
