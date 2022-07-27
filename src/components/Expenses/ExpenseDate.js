import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
   const month = props.date.toLocaleDateString('en-US', {month: 'long'})
   const day = props.date.toLocaleDateString('en-US', {day: '2-digit'})
   const year = props.date.getFullYear()
  return (
   <p>{day}, {month}, {year}</p>
  )
}

export default ExpenseDate