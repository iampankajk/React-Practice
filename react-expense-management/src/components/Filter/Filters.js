import React from "react";
import Selector from "./Selector";


const Filters = (props)=>{

    const yearHandler = (year)=>{
        props.onAddFilter(year);
    }

    return (
        <div>
            <Selector onAddYear={yearHandler} AddYear={props.AddYear}></Selector>
        </div>
    )
};

export default Filters;