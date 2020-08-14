import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { Route } from "@react-navigation/native";

type DataScreenRoute<T extends string> = Route<T> & {
  params: { hello: string };
};

export default function DataScreen({
  route,
  navigation,
}: {
  route: DataScreenRoute<"data">;
  navigation: StackNavigationHelpers;
}) {
  const { hello } = route.params;
  return (
    <View>
      <Text>Hello from Data Screen.</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Home</Text>
        <Text>{hello}</Text>
      </TouchableOpacity>
    </View>
  );
}
