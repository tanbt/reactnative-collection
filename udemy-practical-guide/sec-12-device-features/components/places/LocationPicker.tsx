import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { PermissionStatus } from "expo-image-picker";
import { Alert, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { OutlinedButton } from "../UI/OutlinedButton";

export function LocationPicker() {
  const [locationPermStatus, requestPermission] = useForegroundPermissions();

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
    const location = await getCurrentPositionAsync({ accuracy: 5 });
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={s.mapPreview}></View>
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
});
