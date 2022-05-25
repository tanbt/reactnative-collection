import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

function renderCategoryItem(item: Category) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item.item)}
      numColumns={2}
    ></FlatList>
  );
}
