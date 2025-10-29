import { Image } from "expo-image";
import { ImageRequireSource, StyleSheet, View } from "react-native";

const defaultStyle = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export function ImageHaircut(props: {
  wrapperStyle?: React.ComponentProps<typeof View>["style"];
}) {
  return (
    <View style={[defaultStyle.container, props.wrapperStyle]}>
      <Image
        style={defaultStyle.image}
        source={
          require("../../assets/images/haircut.png") as ImageRequireSource
        }
      />
    </View>
  );
}

export const SampleImages = [
  require("../../assets/images/purple-0.png"),
  require("../../assets/images/purple-1.png"),
  require("../../assets/images/purple-2.png"),
];

// export const LoginStateImages = [
//   require("../../assets/images/login-state/login-fail.png"),
//   require("../../assets/images/login-state/login-succes.png"),
// ];

// export const ForgotPasswordImages = [
//   require("../../assets/images/forgot-password/forgot-password.png"),
//   require("../../assets/images/forgot-password/enter-otp-code.png"),
//   require("../../assets/images/forgot-password/enter-new-password.png"),
// ];

// export const SalonProfileImages = [
//   require("../../assets/images/salon-profile/salon-profile-1.png"),
// ];

// export const flagImages = [
//   require("../../assets/flags/uk-flag.png"),
//   require("../../assets/flags/finland-flag.png"),
//   require("../../assets/flags/vietnam-flag.png"),
// ];
