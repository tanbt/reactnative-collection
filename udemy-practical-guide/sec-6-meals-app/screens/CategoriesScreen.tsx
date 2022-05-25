import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

export function CategoriesScreen({ navigation }: NativeStackScreenProps<any>) {
  function renderCategoryItem(item: Category) {
    function pressHandler() {
      navigation.navigate("Meals");
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item.item)}
      numColumns={2}
    ></FlatList>
  );
}
