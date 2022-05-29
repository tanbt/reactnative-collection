import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Place } from "../../models/place";
import { PlaceItem } from "./PlaceItem";

export function PlacesList({ places }: { places: Place[] }) {
  if (!places || places.length === 0) {
    return (
      <View style={s.noPlacesContainer}>
        <Text style={s.noPlacesText}>No places yet. Please add somes.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={() => {}} />}
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
    color: Colors.primary200
  },
});
