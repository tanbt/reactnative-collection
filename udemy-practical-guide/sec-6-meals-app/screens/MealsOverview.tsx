import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
export function MealsOverview() {
  return (
    <View>
      <Text>Meals overview screen</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
