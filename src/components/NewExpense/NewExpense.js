import { React, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formTrigger, setFormTrigger] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormTrigger(false);
  };

  const triggerFormHandler = () => {
    if (formTrigger) {
      setFormTrigger(false);
    } else {
      setFormTrigger(true);
    }
  };

  let expenseForm = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      buttonTrigger={triggerFormHandler}
    />
  );

  if (!formTrigger) {
    expenseForm = <button onClick={triggerFormHandler}>Add New Expense</button>;
  }

  return <div className="new-expense">{expenseForm}</div>;
};

export default NewExpense;
