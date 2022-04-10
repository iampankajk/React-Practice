import Button from "../UI/Button";
import {useState,Fragment} from 'react';
const CourseInput = ()=>{

    const [value,setValue] = useState(0);

    const inputHandler = (event)=>{
       setValue(event.target.value)
    }
    const formSubmitHandler =(event)=>{
        event.preventDefault();
    }

    console.log("hello")
    return(
        <Fragment>
        <form onSubmit={formSubmitHandler}>
            <h1>Course Goal</h1>
            <input type="text" onInput={inputHandler}></input>
            <Button type="submit">Add Goal</Button>

        </form>

        <div>
            {value}
        </div>
        </Fragment>
        
    )
};

export default CourseInput;