import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Category from "../models/category";

export function MealsOverview() {
  // An alternative to `route` prop
  const route = useRoute();
  const { id, title } = route!.params as Category;

  useRoute;
  return (
    <View>
      <Text>Meals Overview Screen - {title}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
