import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export function LoadingOverlay() {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary200,
  },
});
