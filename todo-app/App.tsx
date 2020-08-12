import { StatusBar } from "expo-status-bar";
import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import { CheckBox, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import { Button } from "react-native-elements";
import { TodoReducer, INIT_TODO } from "./src/reducers/TodoReducer";
import { TodoItem, addTodo, toggleTodo } from "./src/actions/TodoActions";

export default function App() {
  const [value, onChangeText] = useState("");
  const [taskList, dispatch] = useReducer(TodoReducer, INIT_TODO);
  const { container, listWrapper, itemWrapper, header } = styles;

  const renderItem = (
    { item }: { item: TodoItem } // what the syntax!
  ) => (
    <View
      style={
        item.id % 2 == 0
          ? itemWrapper
          : [itemWrapper, { backgroundColor: "#FFF" }]
      }
    >
      <Text>{item.name}</Text>
      <CheckBox
        checked={item.isDone}
        onPress={() => dispatch(toggleTodo(item))}
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

      <SafeAreaView style={listWrapper}>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>

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
  listWrapper: {
    alignSelf: "stretch",
  },
  itemWrapper: {
    backgroundColor: "#EEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
