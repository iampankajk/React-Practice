
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";

const Expense = ({ expenses }) => {

    let expensesContent = <p>No Expenses Found</p>;

    if (expenses.length > 0) {
        expensesContent = expenses.map(expense => <ExpenseItem key={Math.random()} date={expense.date}
            title={expense.title} amount={expense.amount} />)
    };

    return (
        
        <div>
            <ExpenseChart expenses={expenses}></ExpenseChart>
            {expensesContent}
        </div>
        
    );
}

export default Expense;