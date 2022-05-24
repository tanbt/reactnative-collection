import { Platform, StyleSheet, Text } from "react-native";

export function Title({ children }: { children: any }) {
  return <Text style={s.title}>{children}</Text>;
}

const s = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2, web: 1 }),
    borderColor: "white",
    padding: 12,
  },
});
