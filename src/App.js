import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

import './index.css'

const dumExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dumExpense)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  } 

  return (
    <div>
      {/* i wil soon add bootstrap styling so that its a bit more simple to style (styling is not that important rn) */}
      <div className="heading">
        <h1>Expense Tracker</h1>
        <p>Track you expenses, Like a Boss</p>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses
          items={expenses}
        />
    </div>
  );
}

export default App;
