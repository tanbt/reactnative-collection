import { StatusBar } from "expo-status-bar";
import React, { useState, useReducer } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { ListItem, Button } from "react-native-elements";
import { TodoReducer, INIT_TODO } from "./src/reducers/TodoReducer";
import { addTodo, toggleTodo } from "./src/actions/TodoActions";

export default function App() {
  const [value, onChangeText] = useState("");
  const [taskList, dispatch] = useReducer(TodoReducer, INIT_TODO);
  const { container, listItemStyle, header } = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Text h3>Your Todos</Text>
      </View>

      <View style={{ padding: 5, flexDirection: "row" }}>
        <TextInput
          style={{ flexGrow: 1, borderColor: "#CCC", borderWidth: 1, padding: 5, borderRadius: 3 }}
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
            containerStyle={listItemStyle}
            key={i} // this prop is required
            // title prop doesn't work
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
  listItemStyle: {
    // reuse = better performance
    alignSelf: "auto",
  },
});
