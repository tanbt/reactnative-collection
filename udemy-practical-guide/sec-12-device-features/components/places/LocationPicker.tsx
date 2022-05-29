import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { OutlinedButton } from "../UI/OutlinedButton";

export function LocationPicker() {
  function getLocationhandler() {}
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
