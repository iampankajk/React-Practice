import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem({ title, date, amount }) {


    return (
        <div className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__des">
                <h2>{title}</h2>
                <div className="expense-item__price"><h2>${amount}</h2></div>
            </div>
        </div>
    );
}

export default ExpenseItem;