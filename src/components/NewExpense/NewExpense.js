import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false)
const [isCollapse, setIsCollapse] = useState(false)

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()

    }
    props.onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const collapseEditingHandler = () => {
    setIsCollapse(true)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} />}
      {isEditing && !isCollapse && <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>}
      
    </div>
  )
}

export default NewExpense