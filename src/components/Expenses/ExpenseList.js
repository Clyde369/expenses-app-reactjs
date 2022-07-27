import React from 'react'

import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
   if(props.items.length === 0) {
      return <h2 className="text-center text-danger">Found no Expenses</h2>
   }
  return (
      <div class="card-body">
         {props.items.map((expense) => (
            <ExpenseItem
               key={expense.id}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
            />
         ))}
      </div>
  )}

export default ExpenseList