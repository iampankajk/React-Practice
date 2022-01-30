import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const expenseDataHandler = (expenseData)=>{
        const newExpense = {
            ...expenseData,
        }

        props.onAddExpense(newExpense);
    }

    return (
        <div className="new-expense-form">
            <ExpenseForm onSaveData={expenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;