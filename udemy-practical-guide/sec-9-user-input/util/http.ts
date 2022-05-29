import axios from "axios";
import { Expense } from "../store/expenses-context";

const baseUrl =
  "https://udemy-reactnative-course-default-rtdb.europe-west1.firebasedatabase.app";

const expenseEndpoint = baseUrl + "/expenses.json";

export async function storeExpense(expenseData): Promise<string> {
  const response = await axios.post(expenseEndpoint, expenseData);
  return response.data.name;
}

export async function fetchExpenses(): Promise<Expense[]> {
  const response = await axios.get(expenseEndpoint);
  const expenses: Expense[] = [];

  // response.data is an object with key is the id
  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }
  return expenses;
}
