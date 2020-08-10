import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default function App() {
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Text h3>Welcome to my Todo app!</Text>

      <Input inputStyle={styles.inputStyle}
        placeholder="Enter a task"
        leftIcon={{ type: "font-awesome", name: "edit" }}
        onChangeText={(val) => onChangeText(val)}
      />

      <Text>{value != "" ? "You entered: " + value : ""}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  inputStyle: {
    padding: 10
  }
});
