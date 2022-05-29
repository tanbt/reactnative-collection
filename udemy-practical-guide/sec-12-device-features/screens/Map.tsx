import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { LatLng, MapEvent, Marker, Region } from "react-native-maps";

export function Map() {
  const [selectedLocation, setSelectedLocation] = useState<LatLng>();
  const region: Region = {
    latitude: 63.102503,
    longitude: 21.6182102,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  function selectLocationHandler(event: MapEvent) {
    setSelectedLocation(event.nativeEvent.coordinate);
  }

  return (
    <MapView
      style={s.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker coordinate={selectedLocation} title="Picked location" />
      )}
    </MapView>
  );
}

const s = StyleSheet.create({
  map: {
    flex: 1,
  },
});
