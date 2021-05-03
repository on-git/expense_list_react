const ExpenseFilter = (props) => {
  const years = [
    { label: "2019", value: "2019", id: 1 },
    { label: "2020", value: "2020", id: 2 },
    { label: "2021", value: "2021", id: 3 },
    { label: "2022", value: "2022", id: 4 },
  ];

  const changeYearHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <select onChange={changeYearHandler}>
      {years.map((year) => (
        <option key={year.id} value={year.value}>
          {year.label}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
