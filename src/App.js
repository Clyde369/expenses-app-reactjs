import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expenses = [
  { title: 'Car insurance', amount: 300, date: new Date(2020,7,7)},
  { title: 'Toilet paper', amount: 300, date: new Date(2020,7,7)},
  { title: 'Sugar', amount: 300, date: new Date(2020,7,7)}
  ];
    
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>this is a paragraph</p>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
