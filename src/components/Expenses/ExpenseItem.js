import React from "react";
import ExpenseDate from '../Expenses/ExpenseDate'
import '../Expenses/Expenseitem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
   //this a special value to update state in my project
  return (
  <div class="card">
     <Card>
            
            <div class="card-header">
               <h2>{props.title}</h2>
            </div>
            <div>
            <p class="card-body">R{props.amount}</p>
            </div>
            <div class="card-footer text-muted text-center">
               <ExpenseDate
                  date={props.date}
               />
            </div>
     </Card>
  </div>
  );
};

export default ExpenseItem;
