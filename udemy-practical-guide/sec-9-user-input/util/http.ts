import axios from "axios";

const baseUrl =
  "https://udemy-reactnative-course-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  return axios.post(baseUrl + "/expenses.json", expenseData);
}
