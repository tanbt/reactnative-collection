import { StyleSheet, Text } from "react-native";
import { Colors } from "../util/constants";

export function InstructionText({
  children,
  style,
}: {
  children: any;
  style?: any;
}) {
  return <Text style={[s.instructionText, style]}>{children}</Text>;
}

const s = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
    textAlign: "center",
  },
});
