import React from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Card/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = props => {
    return (

        <Wrapper> <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </Wrapper>




    )
};

export default ErrorModal