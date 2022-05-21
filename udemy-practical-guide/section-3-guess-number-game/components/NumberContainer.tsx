import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../util/constants";

export function NumberContainer({ children }: { children: any }) {
  return (
    <View style={s.container}>
      <Text style={s.numberText}>{children}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
