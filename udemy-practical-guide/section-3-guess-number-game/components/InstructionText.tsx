import { StyleSheet, Text } from "react-native";
import { Colors } from "../util/constants";

export function InstructionText({ children }: { children: any }) {
  return <Text style={s.instructionText}>{children}</Text>;
}

const s = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    textAlign: "center",
  },
});
