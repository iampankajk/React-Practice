import ExpenseItem from "./ExpenseItem";

const Expense = ({ expenses }) => {

    return (
        <div>
            {expenses.map(expense => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />)}
        </div>
    );
}

export default Expense;