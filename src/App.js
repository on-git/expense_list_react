import { useState } from "react";
import Expenses from "./components/ExpenseList/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 254.75,
      date: new Date(2021, 4, 10),
    },
    {
      id: "e2",
      title: "TV",
      amount: 1254.75,
      date: new Date(2021, 7, 10),
    },
    {
      id: "e3",
      title: "Cable",
      amount: 54.75,
      date: new Date(2021, 1, 10),
    },
    {
      id: "e4",
      title: "Internet",
      amount: 154.75,
      date: new Date(2021, 3, 10),
    },
  ];

  const [expenseList, updateExpenseList] = useState(expenses);

  const addExpenseHandler = (expense) => {
    updateExpenseList((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses values={expenseList} />
    </div>
  );
}

export default App;
