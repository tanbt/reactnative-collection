import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to my Todo app!</Text>
      <TextInput style={styles.input} placeholder="Enter a task"
      onChangeText={text => onChangeText(text)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const onChangeText = (text: String) => {
  console.log("Receive text: " + text);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  heading: {
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    height: 40,
    alignSelf: "stretch",
    padding: 5,
  },
});
