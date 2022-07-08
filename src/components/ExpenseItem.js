import React from "react";
import ExpenseDate from './ExpenseDate'
import './Expenseitem.css'

const ExpenseItem = (props) => {

  return (
  <div className="expense-item">
         <ExpenseDate 
            date={props.date}
         />
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <p className="expense-item__price">R{props.amount}</p>
         </div>
  </div>);
};

export default ExpenseItem;
