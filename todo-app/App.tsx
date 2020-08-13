import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import Header from "./src/navigation/Header";
import TodoScreen from "./screens/TodoScreen";

export default function App() {
  const { container } = styles;

  return (
    <SafeAreaView style={container}>
      {/* todo change title based on screen */}
      <Header h3 title="Your todos" />

      <TodoScreen />

      <Button title="Go to Data Screen" onPress={() => {console.log("pressed")}} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
