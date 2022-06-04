import { Button, StyleSheet, TextInput, View } from "react-native";

export function LoginEmailPassword() {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        keyboardType="email-address"
        placeholder="Email..."
      />
      <TextInput style={s.input} secureTextEntry />
      <Button title="Submit" />
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: '30%',
  },
  input: {
    width: 300,
    borderColor: "#AAA",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
