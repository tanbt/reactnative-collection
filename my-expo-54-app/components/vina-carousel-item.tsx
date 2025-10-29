import { JSX } from "react";
import {
  ImageBackground,
  ImageRequireSource,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { Colors } from "../util/constants/color";

interface Props extends ViewProps {
  bgSource: ImageRequireSource;
  children?: JSX.Element[] | JSX.Element;
}

export const CarouselBgImageWrapper = ({ bgSource, children }: Props) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={bgSource}
      style={[s.wrapper, { backgroundColor: Colors.light.background }]}
      imageStyle={[s.bgImage]}
    >
      <View>{children}</View>
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  wrapper: {
    height: 170,
    padding: 20,
  },
  bgImage: {
    borderRadius: 12,
  },
  darkOverlay: {
    backgroundColor: "rgba(0,0,0,0.15)",
    flex: 1,
    borderRadius: 12,
  },
});
