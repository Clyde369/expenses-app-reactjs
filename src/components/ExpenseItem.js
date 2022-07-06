import React from "react";
import './Expenseitem.css'

const ExpenseItem = () => {
  return (
  <div className="expense-item">
      <div>
         Date
      </div>
         <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <p className="expense-item__price">$134</p>
         </div>
  </div>);
};

export default ExpenseItem;
