import React, { useState } from 'react'
import './ExpenseForm.css'


///////////////////////////////////////////////////////////////

   //using one state is less common than multiple states:

   // const [enterTitle, setEnterTitle] = useState('')
   // const [enteredAmount, setEnteredAmount] = useState('')
   // const [enterDate, setEnterDate] = useState('')


   //using one state for all of it (we need to update all of them at the same time )
   // const [userInput, setUserInput] = useState[{
   //    enteredTitle: '',
   //    enteredAmount: '',
   //    enteredDate: '',
   // }]

   // const titleChangeHandler = (event) => {
   //    setEnterTitle(event.target.value)
   //    //event is a default event we can pass through so that the browser knows what we are typing
   //    setUserInput({
   //       ...userInput,
   //       enteredTitle: event.target.value
   //    })

      //this method is better than the above method
      //react will guarentee that this will be the latest state snapshot
      //if your state update depends on the previous state use this method
   //    setUserInput((prevState) => {
   //       return {...prevState, enteredTitle: event.target.value}
   //    })
   // }

   // const amountChangeHandler = (event) => {
   //    setUserInput({
   //       ...userInput,
   //       enteredAmount: event.target.value
   //    })
   // }


   //using previous state you should not do it like this:
      // const amountChangeHandler = (event) => {
   //    setUserInput({
   //       ...userInput,
   //       enteredAmount: event.target.value
   //    })
   // }

   //rather like this:
   //setUserInput((prevState) => {
      //return {...prevState, enteredTitle: event.target.value }
   //})

   //this ensures the latest snapshot is available and will be used when
////////////////////////////////////////////////////////////////////////////


//multiple state approach is better than previous state approach
const ExpenseForm = (props) => {
   const [enterTitle, setEnterTitle] = useState('')
   const [enteredAmount, setEnteredAmount] = useState('')
   const [enteredDate, setEnterDate] = useState('')

   const titleChangeHandler = (event) => {
      //event is a default event we can pass through so that the browser knows what we are typing
      setEnterTitle(event.target.value)
   }

   const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value)
   }

   const dateChangeHandler = (event) => {
      setEnterDate(event.target.value)
   }

   const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
         title: enterTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
       };
      props.onSaveExpenseData(expenseData)
      setEnterTitle("")
      setEnteredAmount("")
      setEnterDate("")
   }

  return (
    <div>
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input 
                  value={enterTitle}
                  type="text"
                  onChange={titleChangeHandler}
               />
            </div>
            <div className="new-expense__control">
               <label>Number</label>
               <input value={enteredAmount} type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input value={enteredDate} type="Date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
            </div>
         </div>
         <div className="new-expense__actions">
            <button class='btn btn-danger' onClick={props.onCancel}>Close</button>
            <button type='submit'class='btn btn-dark' >Add Expense</button>
         </div>
      </form>
    </div>
  )
}

export default ExpenseForm