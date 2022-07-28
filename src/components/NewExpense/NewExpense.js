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
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const collapseEditingHandler = () => {
    setIsCollapse(false)
  }

  return (
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Expand/Collapse Expense Adder
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      {!isEditing && <button type="button" class="btn btn-dark" onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onCancel={collapseEditingHandler} onSaveExpenseData={onSaveExpenseData} />}
      </div>
    </div>
  </div>
</div>
  )
}

export default NewExpense