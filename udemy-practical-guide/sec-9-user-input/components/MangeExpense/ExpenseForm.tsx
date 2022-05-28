import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getFormattedDate } from "../../util/date";
import Button from "../UI/Button";
import { Input } from "./Input";

export interface InputValues {
  amount: string; // TextInput component always contains string
  date: string;
  description: string;
}

export interface FormValue {
  amount: number;
  date: Date;
  description: string;
}

interface Props {
  initData?: InputValues;
  isEditing: boolean;
  onCancel: Function;
  onSubmit: Function;
}

export function ExpenseForm({ initData, isEditing, onCancel, onSubmit }) {
  const [inputValues, setInputValues] = useState<InputValues>({
    amount: initData?.amount.toString() || "",
    date: initData?.date.toISOString().slice(0, 10) || "",
    description: initData?.description || "",
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

  function submitHandler() {
    const formData = {
      amount: +inputValues.amount, // "+" converts string to number
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(formData);
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
            onFocus: () => {
              if (!inputValues.date) {
                inputChangeHandler({ date: getFormattedDate(new Date()) });
              }
            },
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

      <View style={s.buttons}>
        <Button style={s.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={s.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
