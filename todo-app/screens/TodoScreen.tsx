import React, { useState, useReducer } from "react";
import {
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Button, CheckBox, Text } from "react-native-elements";
import { TodoReducer, INIT_TODO } from "../src/reducers/TodoReducer";
import { TodoItem, addTodo, toggleTodo } from "../src/actions/TodoActions";

export default function TodoScreen() {
  const [value, onChangeText] = useState("");
  const [taskList, dispatch] = useReducer(TodoReducer, INIT_TODO);
  const { alignSelfStretch, itemWrapper } = styles;

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
    <View style={alignSelfStretch}>
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

      <SafeAreaView style={alignSelfStretch}>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: "#EEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  alignSelfStretch: {
    alignSelf: "stretch",
  },
});
