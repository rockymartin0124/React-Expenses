import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (SelectedYear) => {
    setFilteredYear(SelectedYear);

    console.log(SelectedYear);
    console.log(filteredYear);
  };

  //checking year in a array
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
<ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
