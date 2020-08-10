import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { Input, Button } from "react-native-elements";

export default function App() {
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Text h3>Welcome to my Todo app!</Text>

      <View style={{ flexDirection: "row" }}>
        <Input
          inputStyle={{ padding: 10 }}
          placeholder="Enter a task"
          onChangeText={(val) => onChangeText(val)}
        />
        <Button
          icon={<Icon name="add-to-list" size={24} color="black" />}
          onPress={addTask}
          type="clear"
        />
      </View>

      <Text>{value != "" ? "You entered: " + value : ""}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const addTask = () => {
  console.log("adding task...");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
