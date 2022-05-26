import { NavigationProp, Route } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import Category from "../models/category";
import { SCREENS } from "../util/Constants";

interface Props {
  navigation: NavigationProp<Category>;
  route: Route<SCREENS.Meals, Category>;
}

export function MealsOverview({ navigation, route }: Props) {
  // An alternative to `route` prop
  // const route = useRoute();
  const { id: catId, title: catTitle } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  const mealIds = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  ).map((meal) => meal.id);

  return <MealsList mealIds={mealIds} />;
}
