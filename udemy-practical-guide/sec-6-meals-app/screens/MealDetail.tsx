import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

export function MealDetail() {
  const route = useRoute();
  return (
    <View>
      <Text>{route.params.title}</Text>
    </View>
  );
}
