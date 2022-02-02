import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import './ExpenseForm.css';

const NewExpense = (props) => {

    const [isEditing,setIsEditing] = useState(false);

    const expenseDataHandler = (expenseData)=>{
        const newExpense = {
            ...expenseData,
        }
        setIsEditing(false)
        props.onAddExpense(newExpense);
    }

    const isEditingHandler = ()=>{
        setIsEditing(true);
    }

    const cancelHandler = ()=>{
        setIsEditing(false)
    }

    return (
        <div className="new-expense-form expense-action">
          {!isEditing && <button onClick={isEditingHandler}>Add Expense</button>}  
            {isEditing && <ExpenseForm onSaveData={expenseDataHandler} onCancel={cancelHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;