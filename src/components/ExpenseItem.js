import React from "react";
import './Expenseitem.css'

const ExpenseItem = () => {
   const expenseDate = new Date(2022, 7, 7);
   const expenseTitle = 'Car Insurance'
   const expenseAmount = '200'

  return (
  <div className="expense-item">
      <div>
         {expenseDate.toISOString()}
      </div>
         <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <p className="expense-item__price">R{expenseAmount}</p>
         </div>
  </div>);
};

export default ExpenseItem;
