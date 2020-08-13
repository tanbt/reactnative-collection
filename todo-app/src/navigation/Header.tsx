import React from "react"; // required
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

interface HeaderProps {
  title: string;
  h3?: boolean;
}

export default function Header({ title, h3 }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text h3={h3}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "stretch",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});
