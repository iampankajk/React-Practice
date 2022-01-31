import React, {useState} from "react";
import './Selector.css'
const Selector = (props)=>{
    const [year,setYear] = useState('');

    const yearHandler = (event)=>{
        setYear(event.target.value);
        props.onAddYear(event.target.value);
    }
    
    
    return (
        <div className="selector">
            <h2>Filter by year</h2>
            <select onChange={yearHandler}>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    )

}

export default Selector;