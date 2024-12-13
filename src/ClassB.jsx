import { useContext } from "react";
import {userContext} from "./UseContext";



function ClassB(){
    // const value = useContext(userContext)
    return(
        
       <>
        <h1>Class B</h1>
        {/* <p>CouresName:{value}</p> */}
        <userContext.Consumer>
            {
                (value)=>(<div>CouresName : {value}</div>)
            }
        </userContext.Consumer>
        </>
        
    )
}
export default ClassB;