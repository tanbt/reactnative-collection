import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { PlacesList } from "../components/places/PlacesList";
import { Place } from "../models/place";

export function AllPlaces({ navigation, route }: any) {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currPlaces) => [...currPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}
