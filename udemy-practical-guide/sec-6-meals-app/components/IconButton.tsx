import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: string;
  color: string;
  onPress: () => void;
}

export function IconButton({ icon, color, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? s.pressed : null)}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}
const s = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
