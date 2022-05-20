import { Text, View, Pressable, StyleSheet } from "react-native";
import { Colors } from "../util/constants";

interface ButtonProps {
  children: any;
  onPress: Function;
}

export function PrimaryButton({ children, onPress }: ButtonProps) {
  return (
    <View style={s.container}>
      <Pressable
        style={({ pressed }) => [s.pressableWrapper, pressed && s.pressed]}
        onPress={() => onPress()}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={s.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressableWrapper: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 28,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
