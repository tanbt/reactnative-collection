import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { CheckBox, ListItem, Input, Button } from "react-native-elements";

var taskList = [
  {
    name: "My initial task",
    isDone: true,
  },
];

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
          onPress={() => addTask(value)}
          type="clear"
        />
      </View>

      <Text>{value != "" ? "You entered: " + value : ""}</Text>
      <View>
        {taskList.map((item, i) => (
          <ListItem
            containerStyle={styles.listItemStyle}
            key={i}
            title={item.name}
            checkBox={{
              checked: item.isDone,
              onPress: () => toggleTaskStatus(i),
            }}
            bottomDivider
          />
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const addTask = (value: string) => {
  taskList = taskList.concat({ name: value, isDone: false });
};

const toggleTaskStatus = (index: number) => {
  taskList[index].isDone = !taskList[index].isDone;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  listItemStyle: {
    // reuse = better performance
    alignSelf: "auto",
  },
});
