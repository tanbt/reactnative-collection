import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SCREENS } from "../util/Constants";
import { MealDetail } from "./MealDetail";
import { Ionicons } from "@expo/vector-icons";
import { MealDetailNavProp, MealDetailRouteProp } from "../types";
import { MealDetailSteps } from "./MealDetailSteps";
import { IconButton } from "../components/IconButton";

const Tab = createBottomTabNavigator();

export function MealTabNavigator() {
  const route = useRoute<MealDetailRouteProp>();
  const navigation = useNavigation<MealDetailNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.meal.title,
      headerRight: () => (
        <IconButton icon="star" color="white" onPress={() => {}} />
      ),
    });
  }, [navigation, route]);

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
