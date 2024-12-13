import { useState } from "react"


export function ExampleTime(){
    const [time,settime]=useState("0")

    const handeling=()=>{
        setInterval([
            
        ],1000)
        settime(time+1)
    }
    return(
        <>
        <h1>This is Stop Watch</h1>
        <button onClick={handeling}>STOP</button>
        <button onClick={handeling}>START</button>
        <p>{time}</p>
        </>
    )
}