import {React, useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import '../ExpensesFilter/ExpensesFilter'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';


const Expenses = (props) => {

  const [filter,setFilter] = useState("2021");
  
  const getDate = (date) =>{
    setFilter(date);
     
  }

  return (
    <div>
      
      <Card className="expenses">
      <ExpensesFilter getDate={getDate}></ExpensesFilter>
        {props.items.filter(item => item.date.getFullYear() === +filter ).map(item => (
          <ExpenseItem title={item.title}
            amount={item.amount}
            date={item.date}></ExpenseItem>
        ))}
      </Card>
    </div>

  );
}

export default Expenses;
