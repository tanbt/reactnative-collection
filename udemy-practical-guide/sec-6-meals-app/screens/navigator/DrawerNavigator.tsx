import { createDrawerNavigator } from "@react-navigation/drawer";
import { SCREENS } from "../../util/Constants";
import { CategoriesScreen } from "../CategoriesScreen";
import { FavoriteScreen } from "../FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
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
