import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart'

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState( '2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <h5 class="card-header">Expenses</h5>
          <ExpensesChart 
            expenses={filteredExpenses}
          />
          <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;