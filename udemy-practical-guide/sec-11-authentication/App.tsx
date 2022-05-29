import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import { AppContext, AppContextProvider, AppState } from "./store/AppContext";
import { useContext, useEffect, useState } from "react";
import IconButton from "./components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const appCtx = useContext<AppState>(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={appCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

// Donot register AuthenticatedStack until NavigationContainer until having Auth Token, etc.
function Navigation() {
  const appCtx = useContext<AppState>(AppContext);

  return (
    <NavigationContainer>
      {!appCtx.isAuthenticated && <AuthStack />}
      {appCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const appCtx = useContext<AppState>(AppContext);

  useEffect(() => {
    async function fetchToken() {
      await SplashScreen.preventAutoHideAsync();

      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        appCtx.authenticate(storedToken);
      }
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }
    fetchToken();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppContextProvider>
        <Root />
      </AppContextProvider>
    </>
  );
}
