import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import {
  NavigationContainer,
  RouteProp,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { MealsOverview } from "./screens/MealsOverview";
import { SCREENS } from "./util/Constants";
import { MealDetail } from "./screens/MealDetail";
import Category from "./models/category";
import Meal from "./models/meal";
import { FavoriteScreen } from "./screens/FavoriteScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MealDetailSteps } from "./screens/MealDetailSteps";
import { MealDetailRouteProp } from "./types";

export type RootStackParamList = {
  Category: undefined; // prop name has to match screen name
  CategoryDrawer: undefined;
  Meals: Category;
  MealDetailTab: { meal: Meal };
  MealDetail: { meal: Meal };
  MealDetailSteps: { meal: Meal };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f4f42" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name={SCREENS.Category}
        component={CategoriesScreen}
        options={{
          title: "Choose a category",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SCREENS.Favorite}
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" {...{ size, color }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MealTabNavigator() {
  const route = useRoute<MealDetailRouteProp>();
  return (
    <Tab.Navigator>
      <Stack.Screen
        name={SCREENS.MealDetail}
        component={MealDetail}
        initialParams={{ meal: route.params.meal }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREENS.MealDetailSteps}
        component={MealDetailSteps}
        initialParams={{ meal: route.params.meal }}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

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
