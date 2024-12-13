import {useReducer, useState} from "react";

function SampleCalculator(){
    const [date , setdate] = useState("0")
    return(
        <>
            <h1> AGE CALCUTOR </h1>
            <input type="date"/> <br/>
            <input type="Submit" value="Calculate" onClick={()=>{setdate(0)}}/>
            <h5>Your Age:{date}</h5>
    
        </>
    )
}
export default SampleCalculator;