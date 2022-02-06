import React from "react";
import Card from "../Card/Card";
import styles from './UserInput.module.css';


const UserInput = () => {

    const inputHandler = event=>{
        event.preventDefault();
    }

    return (
        <><Card>
            <div className={styles['user-input']}>
                <form onSubmit={inputHandler}>
                    <h2>Username</h2>
                    <input type='text' />
                    <h2>Age(Years)</h2>
                    <input type='number' />
                </form>
                <div className={styles['button-box']}>
                    <button>Add</button>
                </div>
            </div>
        </Card>
        </>

    )
};

export default UserInput;