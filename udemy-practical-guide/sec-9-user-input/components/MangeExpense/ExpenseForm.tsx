import { StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";

export function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View style={s.root}>
      <Text style={s.title}>Your Expense</Text>
      <View style={s.amountDateWrapper}>
        <Input
          label="Amount"
          style={s.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          label="Date"
          style={s.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: true
          // autoCapitalize: "sentences"
        }}
      />
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  amountDateWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
