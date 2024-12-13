import React from "react"
class AsComponent extends React.Component{
    constructor(){
        super()
    }
    
     Handeling=(event)=>{
        event.preventDefault()
        console.log("Succesfully Login")
        
    }
    
     render(){
        return(
            <>
            <form>
                <input type="Email" placeholder = "Email"/>   <br />
                <input type="Password" placeholder = "Password" /> <br />
                <button onClick={this.Handeling}>Login</button>
            </form>
           
            </>
        )
    }
}
export default AsComponent;