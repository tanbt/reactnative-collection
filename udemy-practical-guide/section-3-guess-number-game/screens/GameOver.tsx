import { StyleSheet, Image, View, Text } from "react-native";
import { Title } from "../components/Title";
import { Colors } from "../util/constants";

interface GameOverProps {
  userNumber: string | undefined;
  roundNumber: number;
}

export function GameOver({ userNumber, roundNumber }: GameOverProps) {
  return (
    <View style={s.root}>
      <Title>GAME OVER</Title>
      <View style={s.imageContainer}>
        <Image style={s.image} source={require("../assets/success.png")} />
      </View>
      <Text style={s.summaryText}>
        Your phone need <Text style={s.hightlight}>{userNumber}</Text> step to
        found your number <Text style={s.hightlight}>{roundNumber}</Text>.
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
