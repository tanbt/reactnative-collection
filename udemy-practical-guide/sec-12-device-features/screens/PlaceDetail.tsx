import { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { LatLng } from "react-native-maps";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { OutlinedButton } from "../components/UI/OutlinedButton";
import { Colors } from "../constants/Colors";
import { Place } from "../models/place";
import { fetchPlace } from "../util/database";

export function PlaceDetail({ navigation, route }: any) {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [place, setPlace] = useState<Place>();
  const placeId = route?.params.placeId || null;

  useEffect(() => {
    setIsFetching(true);
    async function loadPlace() {
      try {
        // add loading indicator and fallback view
        const place = (await fetchPlace(placeId)) as Place;
        setIsFetching(false);
        setPlace(place);
      } catch (err) {
        Alert.alert("Error", "Failed to get the place details");
      }
    }
    loadPlace();
  }, [placeId]);

  function viewOnMapHandler() {
    const { lat: latitude, lng: longitude } = place?.location || {
      lat: 0,
      lng: 0,
    };
    const curLocation: LatLng = { latitude, longitude };
    navigation.navigate("Map", {
      location: curLocation,
      address: place?.title ?? place?.address,
    });
  }

  if (isFetching) {
    return <LoadingOverlay message="Loading place details ..." />;
  }

  return (
    <ScrollView>
      <View style={s.screen}>
        <Image style={s.image} source={{ uri: place?.imageUri }} />
        <View style={s.locationContainer}>
          <View style={s.addressContainer}>
            <Text style={s.address}>{place?.address}</Text>
          </View>
          <OutlinedButton icon="map" onPress={viewOnMapHandler}>
            View on Map
          </OutlinedButton>
        </View>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { alignItems: "center", padding: 12 },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
