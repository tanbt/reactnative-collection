import { StyleSheet, View } from "react-native";
import { Colors } from "../util/constants";

export function Card({ children }: { children: any }) {
  return <View style={s.inputContainer}>{children}</View>;
}

const s = StyleSheet.create({
  inputContainer: {
    marginTop: 25,
    padding: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4, // android shadow
    shadowColor: "black", // ios shadow ...
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
