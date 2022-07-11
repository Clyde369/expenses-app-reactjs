import React, {useState} from "react";
import ExpenseDate from '../Expenses/ExpenseDate'
import '../Expenses/Expenseitem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
   //this a special value to update state in my project
   const [title, setTitle] = useState(props.title)

   const clickHandler = () => {
      setTitle('Updated')
      console.log(title)
   }
  return (
  <Card className="expense-item">
         <ExpenseDate 
            date={props.date}
         />
         <div className="expense-item__description">
            <h2>{title}</h2>
            <p className="expense-item__price">R{props.amount}</p>
         </div>
         <button onClick={clickHandler}>Change Title</button>
  </Card>);
};

export default ExpenseItem;
