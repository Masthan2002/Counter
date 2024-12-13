import { useState } from "react"

 export function Excount(){
        const section={
            borderRadious:"1px",
            marginLeft:"15rem", 
            marginRight:"15rem",
            marginTop:"7rem",
            backgroundColor:"orange"
           
            }

        const head={
            textAlign:"center",
            marginTop:"-0.1rem"
        }

        const para={
            textAlign:"center", 
            fontWeight:"bolder"
        }

        const button1={
            backgroundColor:"red", color:"#ffff",
            border:"none",
            cursor:"pointer"
            
        }

        const button2={
            backgroundColor:"magenta", 
            border:"none",
            cursor:"pointer"
        }

        const button3={
            backgroundColor:"blue", color:"#ffff",
            border:"none",
            cursor:"pointer"
        }

        const div={
            textAlign:"center",
        }


 const [count,setcount] = useState(0)
    return(
        <>
        <section style={section}>
        <h1 style={head}>Count</h1>
        <p style={para}>{count}</p>
        <div style={div}>
        <button onClick={()=>{setcount(count-1)}} style={button1}> - </button>
        <button onClick={()=>{setcount(0)}} style={button2}> Reset </button>
        <button onClick={()=>{setcount(count+1)}} style={button3}> + </button>
        </div>
        </section>
        </>
    )
 }