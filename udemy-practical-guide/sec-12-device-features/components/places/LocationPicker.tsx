import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { PermissionStatus } from "expo-image-picker";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { OutlinedButton } from "../UI/OutlinedButton";
import { getMapPreview, Location } from "../../util/location";
import { useState } from "react";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useEffect } from "react";

export function LocationPicker() {
  const [location, setLocation] = useState<Location>();
  const [locationPermStatus, requestPermission] = useForegroundPermissions();
  const navigation = useNavigation<any>();
  const isFocussed = useIsFocused(); // !!! IMPORTANT
  const route = useRoute<any>();

  useEffect(() => {
    if (isFocussed && route.params) {
      const { latitude: lat, longitude: lng } = route.params.pickedLocation;
      setLocation({ lat, lng });
    }
  }, [route, isFocussed]);

  async function verifyPermission(): Promise<boolean> {
    if (locationPermStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Missing permissions",
        "Please grant Location permission to continue."
      );
      return false;
    }
    return true;
  }

  async function getLocationhandler() {
    const hasPerm = await verifyPermission();
    if (!hasPerm) {
      return;
    }
    const location = await getCurrentPositionAsync({ accuracy: 1 });
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  return (
    <View>
      <View style={s.mapPreview}>
        {location && (
          <Image style={s.image} source={{ uri: getMapPreview(location) }} />
        )}
        {!location && <Text>No location picked yet</Text>}
      </View>
      <View style={s.actions}>
        <OutlinedButton icon="location" onPress={getLocationhandler}>
          Location User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
