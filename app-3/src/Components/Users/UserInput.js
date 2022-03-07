import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './UserInput.module.css';



const UserInput = (props) => {

    const [enteredUsername,setUsername]=useState('');
    const [enteredAge,setAge]=useState('');
    const [error,setError]=useState();


    const inputHandler = event=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            return setError({
                title:"Invalid Input",
                message:"Please enter valid username and age"
            });
        }
        if(+enteredAge<1){
            return setError({
                title:"Invalid Age",
                message:"Please enter valid age(Age>0)"
            });
        }
        props.onAddUser(enteredUsername,enteredAge);
        setUsername('');
        setAge('');

    }

    const changeUsernameHandler=event=>{
        setUsername(event.target.value);
    }
    const changeAgeHandler=event=>{
        setAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card>
            <div className={styles['user-input']}>
                <form onSubmit={inputHandler}>
                    <h2>Username</h2>
                    <input type='text' onChange={changeUsernameHandler} value={enteredUsername}/>
                    <h2>Age(Years)</h2>
                    <input type='number' onChange={changeAgeHandler} value={enteredAge}/>

                    <Button type="submit">Add User</Button>
                </form>
            </div>
        </Card>
        </>

    )
};

export default UserInput;