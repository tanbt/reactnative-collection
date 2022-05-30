import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Location } from "../../util/location";
import { Button } from "../UI/Button";
import { ImagePicker } from "./ImagePicker";
import { LocationPicker } from "./LocationPicker";

export function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>();
  const [pickedLocation, setPickedLocation] = useState<{
    location: Location;
    address: string;
  }>();

  function changeTitleHandler(val: string) {
    setEnteredTitle(val);
  }

  function pickLocationHandler(location: Location, address: string) {
    setPickedLocation({ location, address });
  }

  function takeImageHandler(imageUrl: string) {
    setSelectedImage(imageUrl);
  }

  function savePlaceHandler() {
    console.log({ enteredTitle, selectedImage, pickedLocation });
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
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
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
