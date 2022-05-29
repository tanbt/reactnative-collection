import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ErrorOverlay } from "../components/UI/ErrorOverlay";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingError, setLoadingError] = useState<string>();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (err) {
        setLoadingError("Could not fetch expenses");
      }
      setIsLoading(false);
    })();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  if (loadingError && !isLoading) {
    return (
      <ErrorOverlay
        message={loadingError}
        onConfirm={() => setLoadingError(null)}
      />
    );
  }
  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
