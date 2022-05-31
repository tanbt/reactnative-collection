import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";
import { PlaceForm } from "../components/places/PlaceForm";
import { Place } from "../models/place";
import { insertPlace } from "../util/database";

export function AddPlace({ navigation }: any) {
  async function handleCreatePlace(place: Place) {
    try {
      const result = (await insertPlace(place)) as SQLite.SQLResultSet;
      if (result.rowsAffected !== 1) {
        throw new Error("No place saved.");
      }
      navigation.navigate("AllPlaces");
    } catch (err) {
      Alert.alert("Error", "Failed to save the new place. " + err);
    }
  }

  return <PlaceForm onCreatePlace={handleCreatePlace} />;
}
