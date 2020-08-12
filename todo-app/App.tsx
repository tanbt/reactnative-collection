import { StatusBar } from "expo-status-bar";
import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  CheckBox,
} from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { Button } from "react-native-elements";
import { TodoReducer, INIT_TODO } from "./src/reducers/TodoReducer";
import { TodoItem, addTodo, toggleTodo } from "./src/actions/TodoActions";

export default function App() {
  const [value, onChangeText] = useState("");
  const [taskList, dispatch] = useReducer(TodoReducer, INIT_TODO);
  const { container, listItemStyle, header } = styles;

  const renderItem = (
    { item }: { item: TodoItem } // what the syntax!
  ) => (
    <View>
      <Text>{item.name}</Text>
      <CheckBox
        value={item.isDone}
        onValueChange={() => dispatch(toggleTodo(item))}
      />
    </View>
  );

  return (
    <SafeAreaView style={container}>
      <View style={header}>
        <Text h3>Your Todos</Text>
      </View>

      <View style={{ padding: 5, flexDirection: "row" }}>
        <TextInput
          style={{
            flexGrow: 1,
            borderColor: "#CCC",
            borderWidth: 1,
            padding: 5,
            borderRadius: 3,
          }}
          placeholder="Enter a task"
          onChangeText={(val) => onChangeText(val)}
        />
        <Button
          icon={<Icon name="add-to-list" size={24} color="black" />}
          onPress={() => dispatch(addTodo(value, false))}
          type="clear"
        />
      </View>

      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

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
