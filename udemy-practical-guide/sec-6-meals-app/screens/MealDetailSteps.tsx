import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { MealDetailRouteProp } from "../types";

export function MealDetailSteps() {
  const route = useRoute<MealDetailRouteProp>();
  const meal = route.params.meal;

  return <Text>{meal.title}</Text>;
}
