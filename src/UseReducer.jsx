import { useReducer } from "react"


function UseReducerHook(){

    let reducer=(currentState,action)=>{
        // console.log(action)
        switch(action){
            case"Increment":
           return currentState+1
             case"Decrement":
             return currentState-1
        }
        

    }
    const [count,dispacth] = useReducer(reducer,0)
    return(
        <>
        <h1>Thisnis Reducer</h1>
        <p>Counter:{count}</p>
        <button onClick={()=>{dispacth("Increment")}}>Increment</button>
        <button onClick={()=>{dispacth("Decrement")}}>Decrement</button>
        </>
    )
}
export default UseReducerHook;