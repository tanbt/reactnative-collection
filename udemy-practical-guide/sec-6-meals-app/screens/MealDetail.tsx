import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { List } from "../components/MealDetail/List";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { MealDetailRouteProp } from "../types";

// route and navigation props can be used here
export function MealDetail() {
  const route = useRoute<MealDetailRouteProp>();
  const meal = route.params.meal;

  return (
    <ScrollView style={s.root}>
      <Image source={{ uri: meal.imageUrl }} style={s.image} />
      <Text style={s.title}>{meal.title}</Text>
      <View style={s.details}>
        <Text style={s.detailText}>{meal.duration} min</Text>
        <Text style={s.detailText}>{meal.complexity.toUpperCase()}</Text>
        <Text style={s.detailText}>{meal.affordability.toUpperCase()}</Text>
      </View>
      <View style={s.listContainer}>
        <Subtitle title="Ingredients" />
        <List data={meal.ingredients} />
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: {
    marginBottom: 32,
    backgroundColor: "#3f4f42",
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});
