import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Place } from "../../models/place";
import { PlaceItem } from "./PlaceItem";

export function PlacesList({ places }: { places: Place[] }) {
  const navigation = useNavigation<any>();
  // Writing this function here instead of PlaceItem so it won't be cloned for every items.
  function handleItemSelected(id: number) {
    navigation.navigate("PlaceDetail", { placeId: id });
  }

  if (!places || places.length === 0) {
    return (
      <View style={s.noPlacesContainer}>
        <Text style={s.noPlacesText}>No places yet. Please add somes.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={s.listWrapper}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={() => handleItemSelected(item.id)} />
      )}
    />
  );
}

const s = StyleSheet.create({
  noPlacesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noPlacesText: {
    fontSize: 16,
    color: Colors.primary200,
  },
  listWrapper: {
    margin: 12,
  },
});
