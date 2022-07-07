import React from "react";
import './Expenseitem.css'

const ExpenseItem = (props) => {
  return (
  <div className="expense-item">
      <div>
         {props.date.toISOString()}
      </div>
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <p className="expense-item__price">R{props.amount}</p>
         </div>
  </div>);
};

export default ExpenseItem;
