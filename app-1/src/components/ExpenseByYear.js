import ExpenseItem from "./ExpenseItem";
import './ExpenseByYear.css';

function ExpenseByYear({expenses}) {

    return (
        <div className="expenses-by-year">
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
            <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}></ExpenseItem>
        </div>
    );
}

export default ExpenseByYear;