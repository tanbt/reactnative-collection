import { StyleSheet, Text } from "react-native";

export function Title({ children }: { children: any }) {
  return <Text style={s.title}>{children}</Text>;
}

const s = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
