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
            <select value={props.AddYear} onChange={yearHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )

}

export default Selector;