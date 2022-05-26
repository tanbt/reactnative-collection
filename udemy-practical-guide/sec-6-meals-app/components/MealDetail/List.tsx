import { StyleSheet, View, Text } from "react-native";

interface Props {
  data: string[];
}

export function List({ data }: Props) {
  return (
    <>
      {data.map((item) => (
        <View key={item} style={s.container}>
          <Text style={s.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

const s = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
