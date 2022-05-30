import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { PlacesList } from "../components/places/PlacesList";
import { Place } from "../models/place";
import { fetchPlaces } from "../util/database";

export function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      try {
        const places = await fetchPlaces();
        setLoadedPlaces(places as Place[]);
      } catch (err) {
        Alert.alert("Error", "Failed to load places.");
      }
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}
