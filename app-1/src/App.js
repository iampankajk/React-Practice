
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Filters from "./components/Filter/Filters";
import Card from "./components/Card/Card";

const App = () => {
  const expenses = [
    { title: 'Car Insuarance', date: new Date(2022, 1, 27), amount: 200 },
    { title: 'Investment', date: new Date(2022, 5, 27), amount: 500 },
    { title: 'Rent', date: new Date(2022, 3, 27), amount: 300 },
    { title: 'Electricity', date: new Date(2022, 2, 27), amount: 100 },
  ]

  const addExpenseHandler = (expense) => {
    expenses.push(expense)
    console.log(expenses)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Card>
        <Filters></Filters>
        <Expense expenses={expenses}></Expense>
      </Card>
      

      

    </div>
  );
}

export default App;
