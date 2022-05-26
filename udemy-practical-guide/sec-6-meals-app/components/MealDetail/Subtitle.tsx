import { StyleSheet, View, Text } from "react-native";

interface Props {
  title: string;
  style?: object;
}

export function Subtitle({ title, style }: Props) {
  return (
    <View style={s.subtitleContainer}>
      <Text style={s.subtitle}>{title}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 1,
    width: "75%",
    margin: 16,
    padding: 6,
    alignSelf: "center",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
