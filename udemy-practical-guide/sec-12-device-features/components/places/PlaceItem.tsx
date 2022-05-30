import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Place } from "../../models/place";

interface Props {
  place: Place;
  onSelect: Function;
}

export function PlaceItem({ place, onSelect }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [s.root, pressed && s.pressed]}
      onPress={() => onSelect()}
    >
      <Image style={s.image} source={{ uri: place.imageUri }} />
      <View style={s.info}>
        <Text style={s.title}>{place.title || place.address}</Text>
        <Text style={s.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    flexDirection: "column",
    padding: 12,
  },
  title: {
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
