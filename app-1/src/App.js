
import ExpenseByYear from "./components/ExpenseByYear";

function App() {
  const expenses = [
    { title: 'Car Insuarance', date: new Date(2022, 1, 27), amount: 200 },
    { title: 'Investment', date: new Date(2022, 5, 27), amount: 500 },
    { title: 'Rent', date: new Date(2022, 3, 27), amount: 300 },
    { title: 'Electricity', date: new Date(2022, 2, 27), amount: 100 },
  ]
  return (
    <div className="App">
      <h1>Let's get started </h1>
        <ExpenseByYear expenses={expenses}></ExpenseByYear>
      
   </div>
  );
}

export default App;
