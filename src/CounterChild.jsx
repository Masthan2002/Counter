import React, { useState } from "react";
import  {Count} from "react";


class ExCounterChild extends React.Component{
    constructor(){
        super()
        this.state = {
            Count :(0)
            
        }
    }
    Submission=()=>{
       console.log (this.setState.Count+1)
    }
    render(){
        return(
            <>
            <h1>Class Component</h1>
            <p>Counter:{Count}</p>
            <button onClick={this.Submission}>Submit</button>
            </>
        )
    }
}
export default ExCounterChild;