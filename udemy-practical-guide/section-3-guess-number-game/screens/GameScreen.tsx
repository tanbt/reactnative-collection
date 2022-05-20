import { StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";

export function GameScreen() {
  return (
    <View style={s.screen}>
      <Title>Opponent's Guess</Title>
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
