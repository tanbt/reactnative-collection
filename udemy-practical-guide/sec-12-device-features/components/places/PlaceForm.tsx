import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { ImagePicker } from "./ImagePicker";
import { LocationPicker } from "./LocationPicker";

export function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState<string>("");

  function changeTitleHandler(val: string) {
    setEnteredTitle(val);
  }

  return (
    <ScrollView style={s.form}>
      <View>
        <Text style={s.label}>Title</Text>
        <TextInput
          style={s.input}
          value={enteredTitle}
          onChangeText={changeTitleHandler}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
