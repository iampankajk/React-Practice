import React from "react";
import './ExpenseForm.css';

const ExpenseForm = ()=>{
    return (
        <form>
            <div className="expense-form">
                <div className="expense-control">
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div className="expense-control">
                    <label>Amount</label>
                    <input type="number"/>
                </div>
                <div className="expense-control">
                    <label>Date</label>
                    <input type="date"/>
                </div>
            </div>
            <div className="expense-action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;