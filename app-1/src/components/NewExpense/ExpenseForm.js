import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const titleHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount,setEnteredAmount] = useState('');
    const amountHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }

    const [enteredDate,setEnteredDate] = useState('');
    const dateHandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
        props.onSaveData(expenseData);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="expense-form">
                <div className="expense-control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler}/>
                </div>
                <div className="expense-control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountHandler} />
                </div>
                <div className="expense-control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateHandler}/>
                </div>
            </div>
            <div className="expense-action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;