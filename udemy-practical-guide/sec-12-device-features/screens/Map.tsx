import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { LatLng, MapEvent, Marker, Region } from "react-native-maps";
import { IconButton } from "../components/UI/IconButton";

export function Map() {
  const navigation = useNavigation<any>();
  const [selectedLocation, setSelectedLocation] = useState<
    LatLng | undefined
  >();
  const region: Region = {
    latitude: 63.102503,
    longitude: 21.6182102,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  function selectLocationHandler(event: MapEvent) {
    setSelectedLocation({ ...event.nativeEvent.coordinate });
  }

  useEffect(() => console.log(selectedLocation), [selectedLocation]);

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
  }, [navigation, savePickedLocationHandler]);

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
