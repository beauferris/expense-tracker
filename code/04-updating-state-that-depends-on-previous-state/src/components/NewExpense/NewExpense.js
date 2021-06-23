import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {

  const onSaveExpenseData = (enteredExpenseData)=>{
    const expenseData = { 
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.addExpense(expenseData);

    console.log(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
  );
};

export default NewExpense;
