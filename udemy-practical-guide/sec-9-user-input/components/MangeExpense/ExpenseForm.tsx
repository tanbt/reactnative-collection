import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";

interface InputValues {
  amount: string; // TextInput component always contains string
  date: string;
  description: string;
}

export function ExpenseForm() {
  const [inputValues, setInputValues] = useState<InputValues>({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(value: object) {
    setInputValues((currentValues) => {
      return { ...currentValues, ...value };
    });
  }

  // Example of dynamic property access by variable
  function inputChangeHandler2(identifier, value) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [identifier]: value,
      };
    });
  }

  return (
    <View style={s.root}>
      <Text style={s.title}>Your Expense</Text>
      <View style={s.amountDateWrapper}>
        <Input
          label="Amount"
          style={s.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (amount: string) =>
              inputChangeHandler2("amount", amount),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={s.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (date: string) => inputChangeHandler({ date }),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: true
          // autoCapitalize: "sentences"
          onChangeText: (description: string) =>
            inputChangeHandler({ description }),
          value: inputValues.description,
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
