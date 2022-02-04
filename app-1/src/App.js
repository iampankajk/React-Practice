import React,{useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Filters from "./components/Filter/Filters";
import Card from "./components/Card/Card";


 const DummyExpense = [
    { title: 'Car Insuarance', date: new Date(2022, 1, 27), amount: 200 },
    { title: 'Investment', date: new Date(2019, 5, 27), amount: 500 },
    { title: 'Rent', date: new Date(2021, 3, 27), amount: 300 },
    { title: 'Electricity', date: new Date(2022, 2, 27), amount: 100 },
  ]

const App = () => {

 

  const [expenses, setNewExpense] = useState(DummyExpense);
  const [year,setYear] = useState('2020');

  const addExpenseHandler = (expense) => {
    setNewExpense(prevExpense=>{
      return [expense,...prevExpense];
    })
  }

  const filterHandler = (year)=>{
    setYear(year)
    const filterExpenses = DummyExpense.filter(expense=> expense.date.getFullYear().toString()===year)
    setNewExpense(filterExpenses)
  }

  
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Card>
        <Filters onAddFilter = {filterHandler} AddYear = {year}></Filters>
        <Expense expenses={expenses}></Expense>
      </Card>
      

      

    </div>
  );
}

export default App;
