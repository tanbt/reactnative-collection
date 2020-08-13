import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {} from "react-native-elements";
import Header from "./src/navigation/Header";
import TodoScreen from "./screens/TodoScreen";

export default function App() {
  const { container } = styles;

  return (
    <SafeAreaView style={container}>
      <Header h3 title="Your todos" />

      <TodoScreen />

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
