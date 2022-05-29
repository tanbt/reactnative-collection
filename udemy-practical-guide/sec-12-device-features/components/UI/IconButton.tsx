import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: string;
  size: number;
  color: string | undefined;
  onPress: Function;
}

export function IconButton({ icon, size, color, onPress }: Props) {
  return (
    <Pressable
      style={(pressed) => [s.button, pressed && s.pressed]}
      onPress={() => onPress()}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const s = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
