import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

export function ErrorOverlay({ message, onConfirm = () => {} }) {
  function confirmError() {}
  return (
    <View style={s.container}>
      <Text style={[s.text, s.title]}>An error occured!</Text>
      <Text style={s.message}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
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
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    marginVertical: 16,
  },
});
