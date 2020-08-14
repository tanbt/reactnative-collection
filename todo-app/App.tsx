import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import Header from "./src/navigation/Header";
import TodoScreen from "./screens/TodoScreen";
import DataScreen from "./screens/DataScreen";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { DataScreenParamList } from "./types";

const Stack = createStackNavigator();

function HomeScreen({ navigation }: StackScreenProps<DataScreenParamList>) {
  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <Header h3 title="Your todos" />

      <TodoScreen />

      <Button
        title="Go to Data Screen"
        onPress={() => {
          navigation.navigate("Data", {
            hello: "Hello from a param!",
          });
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Data"
          component={DataScreen}
          options={{ title: "Todo data" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
