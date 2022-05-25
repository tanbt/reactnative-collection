import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Meal from "../models/meal";

export function MealItem({ data }: { data: Meal }) {
  return (
    <View style={s.mealItem}>
      <View style={s.innerContainer}>
        <Pressable
          android_ripple={{ color: "#cccccc" }}
          style={({ pressed }) => (pressed ? s.buttonPressed : null)}
        >
          <View>
            <Image source={{ uri: data.imageUrl }} style={s.image} />
            <Text style={s.title}>{data.title}</Text>
          </View>
          <View style={s.details}>
            <Text>{data.duration} min</Text>
            <Text>{data.complexity.toUpperCase()}</Text>
            <Text>{data.affordability.toUpperCase()}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

/** On IOS, overflow must be 'visible' in order to have Shadow.
 * But that causes content inside to be showed when out of border radius => no border radius.
 * So we need to wrap the inner content inside another view with borderRadius.
 * Thus the outter view will take care of shadowing.
 */
const s = StyleSheet.create({
  mealItem: {
    margin: 16,
    elevation: 4,
    shadowColor: "balck",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
