import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

interface Props {
  icon: string;
  onPress: Function;
  children: any;
}

export function OutlinedButton({ icon, onPress, children }: Props) {
  return (
    <Pressable
      style={(pressed) => [s.button, pressed && s.pressed]}
      onPress={() => onPress()}
    >
      <Ionicons style={s.icon} name={icon} size={28} />
      <Text style={s.text}>{children}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  button: {
    flexDirection: "row",
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
    color: Colors.primary500,
  },
  text: {
    color: Colors.primary500,
  },
});
