import { StatusBar } from "expo-status-bar";
import React, { useState, useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { ListItem, Input, Button } from "react-native-elements";
import { TodoReducer, INIT_TODO } from "./src/reducers/TodoReducer";
import { addTodo, toggleTodo } from "./src/actions/TodoActions";

export default function App() {
  const [value, onChangeText] = useState("");
  const [taskList, dispatch] = useReducer(TodoReducer, INIT_TODO);

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
          onPress={() => dispatch(addTodo(value, false))}
          type="clear"
        />
      </View>

      <View>
        {taskList.map((item, i) => (
          <ListItem
            containerStyle={styles.listItemStyle}
            // key={i}
            // title property doesn't work
            leftElement={<Text>{item.name}</Text>}
            checkBox={{
              checked: item.isDone,
              onPress: () => dispatch(toggleTodo(item)),
            }}
          />
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );

  function toggleTaskStatus(index: number) {
    taskList[index].isDone = !taskList[index].isDone;
  }
}

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
