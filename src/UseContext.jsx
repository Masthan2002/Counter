import React from "react";
import ClassA from "./ClassA"



 export const userContext = React.createContext()

function UsecontextHooks(){
    return(
        <>
        <h1>This is UseContext</h1>
        <userContext.Provider value = "JavaFull Stack">
           <ClassA/>
        </userContext.Provider>

        </>
    )
}
export default UsecontextHooks;