import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

interface Props {
  title: string;
  color: string;
  onPress: Function;
}

export function CategoryGridTile({ title, color, onPress }: Props) {
  return (
    <View style={s.gridItem}>
      <Pressable
        onPress={() => onPress()}
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [s.button, pressed ? s.buttonPressed : null]}
      >
        <View style={[s.innerContainer, { backgroundColor: color }]}>
          <Text style={s.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "balck",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
