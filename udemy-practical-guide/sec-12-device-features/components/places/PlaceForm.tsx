import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Place } from "../../models/place";
import { Location } from "../../util/location";
import { Button } from "../UI/Button";
import { ImagePicker } from "./ImagePicker";
import { LocationPicker } from "./LocationPicker";

interface Props {
  onCreatePlace: (place: Place) => void;
}

export function PlaceForm({ onCreatePlace }: Props) {
  const [enteredTitle, setEnteredTitle] = useState<string>(
    `Your place ${new Date().toDateString()}`
  );
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [pickedLocation, setPickedLocation] = useState<{
    location: Location;
    address: string;
  }>({ location: { lat: -1, lng: -1 }, address: "" });

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
    const placeData = new Place(
      Math.random(),
      enteredTitle,
      selectedImage,
      pickedLocation?.address,
      pickedLocation?.location
    );
    onCreatePlace(placeData);
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
