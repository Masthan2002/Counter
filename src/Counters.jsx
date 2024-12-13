import { useState } from "react"
import ExCounterChild from "./CounterChild"

function Counter(){

    const [count,setcount] = useState(0)

    return(
        <>
        <h1>This is counter class</h1>
        <p>Conter:{count}</p>
        <button onClick ={()=>{setcount(count + 2)}}>Run</button>
        <ExCounterChild/>
        </>
    )
}
export default Counter;