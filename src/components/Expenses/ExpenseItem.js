import React from "react";
import ExpenseDate from '../Expenses/ExpenseDate'
import '../Expenses/Expenseitem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
   //this a special value to update state in my project
  return (
  <li>
     <Card className="expense-item">
            <ExpenseDate
               date={props.date}
            />
            <div className="expense-item__description">
               <h2>{props.title}</h2>
               <p className="expense-item__price">R{props.amount}</p>
            </div>
     </Card>
  </li>
  );
};

export default ExpenseItem;
