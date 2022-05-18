import { Text, View, Pressable, StyleSheet } from "react-native";

export function PrimaryButton({ children }: { children: any }) {
  function pressHandler() {
    console.log("pressed");
  }
  return (
    <View style={s.container}>
      <Pressable
        style={({ pressed }) => [s.pressableWrapper, pressed && s.pressed]}
        onPress={pressHandler}
        android_ripple={{ color: "#42063c" }}
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
    backgroundColor: "#72063c",
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
