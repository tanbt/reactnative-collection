import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./App";
import { SCREENS } from "./util/Constants";

export type MealsScreenNavigationProp = NavigationProp<
  RootStackParamList,
  SCREENS.Meals
>;

export type MealDetailRouteProp = RouteProp<
  RootStackParamList,
  SCREENS.MealDetail
>;
export type MealDetailNavProp = NavigationProp<
  RootStackParamList,
  SCREENS.MealDetail
>;
