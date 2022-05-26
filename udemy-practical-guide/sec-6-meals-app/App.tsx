import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverview } from "./screens/MealsOverview";
import { SCREENS } from "./util/Constants";
import Category from "./models/category";
import Meal from "./models/meal";
import { DrawerNavigator } from "./screens/DrawerNavigator";
import { MealTabNavigator } from "./screens/MealTabNavigator";

export type RootStackParamList = {
  Category: undefined; // prop name has to match screen name
  CategoryDrawer: undefined;
  Meals: Category;
  MealDetailTab: { meal: Meal };
  MealDetail: { meal: Meal };
  MealDetailSteps: { meal: Meal };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREENS.Category}
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f4f42" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name={SCREENS.CategoryDrawer}
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SCREENS.Meals}
            component={MealsOverview}
            // options={({ route, navigation }) => route.params!.title}
          />
          <Stack.Screen
            name={SCREENS.MealDetailTab}
            component={MealTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
