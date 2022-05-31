import { useLayoutEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { LatLng, MapEvent, Marker, Region } from "react-native-maps";
import { IconButton } from "../components/UI/IconButton";

export function Map({ navigation, route }: any) {
  const curLocation: LatLng = route?.params?.location || undefined;
  const curTitle: string = route?.params?.address || undefined;

  const [selectedLocation, setSelectedLocation] = useState<LatLng | undefined>(
    curLocation
  );
  const region: Region = {
    latitude: curLocation ? curLocation.latitude : 63.102503,
    longitude: curLocation ? curLocation.longitude : 21.6182102,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  function selectLocationHandler(event: MapEvent) {
    if (curLocation) {
      return;
    }
    setSelectedLocation({ ...event.nativeEvent.coordinate });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "Missing location",
        "Please pick a location by tapping on the map!"
      );
      return;
    }
    navigation.navigate("AddPlace", { pickedLocation: selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (curLocation) {
      return;
    }

    navigation.setOptions({
      headerRight: ({ tintColor }: any) => (
        <IconButton
          icon="save"
          onPress={savePickedLocationHandler}
          size={24}
          color={tintColor}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler, curLocation]);

  return (
    <MapView
      style={s.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          coordinate={selectedLocation}
          title={curTitle || "Picked location"}
        />
      )}
    </MapView>
  );
}

const s = StyleSheet.create({
  map: {
    flex: 1,
  },
});
