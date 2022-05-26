import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { RootStackParamList } from "../App";
import { SCREENS } from "../util/Constants";

type MealsScreenRouteProp = RouteProp<RootStackParamList, SCREENS.MealDetail>;

export function MealDetail() {
  const route = useRoute<MealsScreenRouteProp>();
  return (
    <View>
      <Text>{route.params.meal.title}</Text>
    </View>
  );
}
