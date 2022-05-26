import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverview } from "./screens/MealsOverview";
import { SCREENS } from "./util/Constants";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREENS.Category}
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f4f42" },
          }}
        >
          <Stack.Screen
            name={SCREENS.Category}
            component={CategoriesScreen}
            options={{
              title: "Choose a category",
            }}
          />
          <Stack.Screen
            name={SCREENS.Meals}
            component={MealsOverview}
            // options={({ route, navigation }) => route.params!.title}
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
