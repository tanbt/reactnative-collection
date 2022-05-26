import { NavigationProp, Route } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import Category from "../models/category";
import Meal from "../models/meal";
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

  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    return <MealItem data={itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
