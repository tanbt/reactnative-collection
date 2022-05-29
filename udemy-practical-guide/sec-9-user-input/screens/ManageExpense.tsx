import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ExpenseForm, FormValue } from "../components/MangeExpense/ExpenseForm";
import { ErrorOverlay } from "../components/UI/ErrorOverlay";

import IconButton from "../components/UI/IconButton";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";

function ManageExpense({ route, navigation }) {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendingError, setSendingError] = useState<string>();

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (exp) => exp.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSending(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);
      // setIsSending(false);
      navigation.goBack();
    } catch (err) {
      setIsSending(false);
      setSendingError("Could not delete the expense.");
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(formValue: FormValue) {
    setIsSending(true);
    try {
      if (isEditing) {
        await updateExpense(editedExpenseId, formValue);
        expensesCtx.updateExpense(editedExpenseId, formValue);
      } else {
        const id = await storeExpense(formValue);
        expensesCtx.addExpense({ ...formValue, id });
      }
      // setIsSending(false);
      navigation.goBack();
    } catch (err) {
      setIsSending(false);
      setSendingError("Could not save the expense.");
    }
  }

  if (sendingError && !isSending) {
    return (
      <ErrorOverlay
        message={sendingError}
        onConfirm={() => setSendingError(null)}
      />
    );
  }
  if (isSending) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        initData={selectedExpense}
        isEditing={isEditing}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
