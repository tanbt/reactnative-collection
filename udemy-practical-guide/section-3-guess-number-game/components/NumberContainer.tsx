import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../util/constants";

export function NumberContainer({ children }: { children: any }) {
  return (
    <View style={s.container}>
      <Text style={s.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const s = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 800 ? 12 : 24,
    marginTop: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth > 800 ? 45 : 36,
    fontWeight: "bold",
  },
});
