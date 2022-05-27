import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MealsList } from "../components/MealsList";
// import { useContext } from "../store/context/AppContext";

export function FavoriteScreen() {
  // const [appState] = useContext();
  const favMealsIds = useSelector<any, any>((state) => state.favoriteMeals.ids);

  if (favMealsIds.length > 0) {
    return <MealsList mealIds={favMealsIds} />;
  }
  return (
    <View style={s.noFavContainer}>
      <Text style={s.noFavText}>You have no favorite meal yet.</Text>
      <Text style={s.noFavText}>
        Please open a meal and click the Star icon on top-right corner.
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  noFavContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  noFavText: {
    color: "white",
  },
});
