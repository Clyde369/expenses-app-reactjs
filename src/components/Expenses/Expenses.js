import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

let expensesContent = <p className="noFilteredDataFound">No data found D:</p>
if(filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.length > 0 && ( 
    filteredExpenses.map((expense) => <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    /> )
)
}

  return (

    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* mapping the data from the expenseItems with the title, amount and date information */}

      {/* conditional the main curly brackets are removed so that the data can be in one string of brackets*/}
      {filteredExpenses.length === 0 && {expensesContent} }
        {
          expensesContent
        }
      </Card>
    </div>
  );
};

export default Expenses;