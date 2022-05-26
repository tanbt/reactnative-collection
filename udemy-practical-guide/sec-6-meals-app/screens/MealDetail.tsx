import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../App";
import { List } from "../components/MealDetail/List";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { SCREENS } from "../util/Constants";

type MealDetailRouteProp = RouteProp<RootStackParamList, SCREENS.MealDetail>;
type MealDetailNavProp = NavigationProp<RootStackParamList, SCREENS.MealDetail>;

export function MealDetail() {
  const route = useRoute<MealDetailRouteProp>();
  const meal = route.params.meal;
  const navigation = useNavigation<MealDetailNavProp>();
  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [navigation, meal]);
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
        <Subtitle title="Steps" />
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: {
    marginBottom: 32,
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
