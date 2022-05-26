import { FlatList, ListRenderItemInfo, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import Category from "../models/category";
import Meal from "../models/meal";
import { SCREENS } from "../util/Constants";

export function MealsList({ mealIds }: { mealIds: string[] }) {
  const meals = MEALS.filter((meal) => mealIds.includes(meal.id));

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    return <MealItem data={itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
