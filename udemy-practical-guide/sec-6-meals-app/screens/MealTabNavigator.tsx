import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SCREENS } from "../util/Constants";
import { MealDetail } from "./MealDetail";
import { Ionicons } from "@expo/vector-icons";
import { MealDetailNavProp, MealDetailRouteProp } from "../types";
import { MealDetailSteps } from "./MealDetailSteps";
import { IconButton } from "../components/IconButton";
import { useContext } from "../store/context/AppContext";

const Tab = createBottomTabNavigator();

export function MealTabNavigator() {
  const route = useRoute<MealDetailRouteProp>();
  const navigation = useNavigation<MealDetailNavProp>();
  const { meal } = route.params;
  const [appState, toggleFavorite] = useContext();

  function toggleFavoriteHandler() {
    toggleFavorite(meal.id);
  }

  useLayoutEffect(() => {
    const fIcon = appState.favoriteIds.includes(meal.id)
      ? "star"
      : "star-outline";

    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          icon={fIcon}
          color="white"
          onPress={toggleFavoriteHandler}
        />
      ),
    });
  }, [navigation, route, toggleFavoriteHandler]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#351401" },
      }}
    >
      <Tab.Screen
        name={SCREENS.MealDetail}
        component={MealDetail}
        initialParams={{ meal: route.params.meal }}
        options={{
          tabBarLabel: "Ingredients",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="fast-food-sharp" {...{ size, color }} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MealDetailSteps}
        component={MealDetailSteps}
        initialParams={{ meal: route.params.meal }}
        options={{
          tabBarLabel: "Steps",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="color-fill" {...{ size, color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
