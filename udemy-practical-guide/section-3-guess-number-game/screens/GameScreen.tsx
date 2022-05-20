import { StyleSheet, Text, View } from "react-native";

export function GameScreen() {
  return (
    <View style={s.screen}>
      <Text>Game screen</Text>

      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 30,
  },
});
