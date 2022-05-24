import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { Title } from "../components/Title";
import { Colors } from "../util/constants";

interface GameOverProps {
  userNumber: string | undefined;
  roundNumber: number;
}

export function GameOver({ userNumber, roundNumber }: GameOverProps) {
  const { width, height } = useWindowDimensions();
  let imageSize = {
    width: 400,
    height: 400,
    borderRadius: 200,
  };
  if (height < 768) {
    imageSize = {
      width: 200,
      height: 200,
      borderRadius: 100,
    };
  }

  return (
    <View style={s.root}>
      <Title>GAME OVER</Title>
      <View style={[s.imageContainer, imageSize]}>
        <Image style={s.image} source={require("../assets/success.png")} />
      </View>
      <Text style={s.summaryText}>
        Your phone need <Text style={s.hightlight}>{roundNumber}</Text> step to
        found your number <Text style={s.hightlight}>{userNumber}</Text>.
      </Text>
    </View>
  );
}

// const dWidth = Dimensions.get("window").width;

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // just an example, can use dynamic width "80%" instead
    // width: dWidth < 800 ? 250 : 600,
    // height: dWidth < 800 ? 250 : 600,
    // borderRadius: dWidth < 800 ? 125 : 300,
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
