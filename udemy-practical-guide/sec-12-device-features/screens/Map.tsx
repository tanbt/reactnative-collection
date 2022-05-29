import { StyleSheet } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

export function Map() {
  const region: Region = {
    latitude: 63.102503,
    longitude: 21.6182102,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  return <MapView style={s.map} initialRegion={region}></MapView>;
}

const s = StyleSheet.create({
  map: {
    flex: 1,
  },
});
