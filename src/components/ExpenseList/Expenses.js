import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [selectedFilter, updateFilter] = useState("2019");
  const changeFilterHandler = (newYear) => {
    updateFilter(newYear);
  };

  const filteredExpenses = props.values.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onFilterChange={changeFilterHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
