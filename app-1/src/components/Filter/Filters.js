import React from "react";
import Selector from "./Selector";


const Filters = ()=>{

    const yearHandler = (year)=>{
        console.log(year);
    }

    return (
        <div>
            <Selector onAddYear={yearHandler}></Selector>
        </div>
    )
};

export default Filters;