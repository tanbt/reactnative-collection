import { Colors } from "@/util/constants";
import { StyleSheet, Text, View } from "react-native";
import { CarouselBgImageWrapper } from "../components/vina-carousel-item";
import { VinaCarousel } from "./vina-carousel";

export const SampleImages = [
  require("../assets/images/purple-0.png"),
  require("../assets/images/purple-1.png"),
  require("../assets/images/purple-2.png"),
];

const CarouselDemo = () => {
  return (
    <View
      style={[styles.container, { backgroundColor: Colors.light.background }]}
    >
      <VinaCarousel height={170}>
        <CarouselBgImageWrapper bgSource={SampleImages[0]}>
          <Text style={{ color: Colors.light.text }}>HELLO 1</Text>
        </CarouselBgImageWrapper>

        <CarouselBgImageWrapper bgSource={SampleImages[1]}>
          <Text style={{ color: Colors.light.text }}>HELLO ABC</Text>
        </CarouselBgImageWrapper>

        <CarouselBgImageWrapper bgSource={SampleImages[2]}>
          <Text style={{ color: Colors.light.text }}>HELLO 123</Text>
          <Text style={{ color: Colors.light.text }}>HELLO ABC</Text>
        </CarouselBgImageWrapper>
      </VinaCarousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CarouselDemo;
