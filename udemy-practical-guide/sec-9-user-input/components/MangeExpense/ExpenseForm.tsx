import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import Button from "../UI/Button";
import { Input } from "./Input";

interface InputItem {
  value: string; // TextInput component always contains string
  isValid: boolean;
}
export interface InputValues {
  amount: InputItem;
  date: InputItem;
  description: InputItem;
}

export interface FormValue {
  amount: number;
  date: Date;
  description: string;
}

interface Props {
  initData?: any;
  isEditing: boolean;
  onCancel: Function;
  onSubmit: Function;
}

export function ExpenseForm({ initData, isEditing, onCancel, onSubmit }) {
  const [inputs, setInputs] = useState<InputValues>({
    amount: {
      value: initData?.amount.toString() || "",
      isValid: true, // hide the invalid warnings at the beginning
    },
    date: {
      value: initData?.date.toISOString().slice(0, 10) || "",
      isValid: true,
    },
    description: {
      value: initData?.description || "",
      isValid: true,
    },
  });

  // function inputChangeHandler(value: object) {
  //   setInputs((currentInputs) => {
  //     return { ...currentInputs, ...value };
  //   });
  // }

  // Example of dynamic property access by variable
  function inputChangeHandler2(identifier, enteredValue) {
    setInputs((currentValues) => {
      return {
        ...currentValues,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const formData = {
      amount: +inputs.amount.value, // "+" converts string to number
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isValidAmount = !isNaN(formData.amount) && formData.amount > 0;
    const isValidDate = formData.date.toString() !== "Invalid Date";
    const isValidDescription = formData.description.trim().length > 0;

    if (isValidAmount && isValidDate && isValidDescription) {
      onSubmit(formData);
    } else {
      // Alert.alert("Invalid input", "Please check your input values.");
      setInputs((currInput: InputValues) => {
        return {
          amount: {
            value: currInput.amount.value,
            isValid: isValidAmount,
          },
          date: {
            value: currInput.date.value,
            isValid: isValidDate,
          },
          description: {
            value: currInput.description.value,
            isValid: isValidDescription,
          },
        };
      });
      return;
    }
  }

  return (
    <View style={s.root}>
      <Text style={s.title}>Your Expense</Text>
      <View style={s.amountDateWrapper}>
        <Input
          label="Amount"
          isValid={inputs.amount.isValid}
          style={s.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (amount: string) =>
              inputChangeHandler2("amount", amount),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          isValid={inputs.date.isValid}
          style={s.rowInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onFocus: () => {
              if (!inputs.date.value) {
                inputChangeHandler2("date", getFormattedDate(new Date()));
              }
            },
            onChangeText: (date: string) => inputChangeHandler2("date", date),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        isValid={inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          // autoCorrect: true
          // autoCapitalize: "sentences"
          onChangeText: (description: string) =>
            inputChangeHandler2("description", description),
          value: inputs.description.value,
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
