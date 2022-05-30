import { PlaceForm } from "../components/places/PlaceForm";
import { Place } from "../models/place";

export function AddPlace({ navigation }: any) {
  function handleCreatePlace(place: Place) {
    navigation.navigate("AllPlaces", { place });
  }

  return <PlaceForm onCreatePlace={handleCreatePlace} />;
}
