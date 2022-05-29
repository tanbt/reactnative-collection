import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Place } from "../../models/place";

interface Props {
  place: Place;
  onSelect: Function;
}

export function PlaceItem({ place, onSelect }: Props) {
  return (
    <Pressable onPress={() => onSelect()}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  root: {},
});
