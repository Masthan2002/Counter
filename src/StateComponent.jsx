import React,{ Component } from "react"

class StateExample extends Component{
    constructor(){
        super()
    //    this.state = {
    //         company:"accenture",
    //         employeName:"Masthan",
    //         employeId:16982
    //     } 
    // }
    // Manage=()=>{
    //     return this.setState({company: "HCL",employeName:"Naveen",employeId:237861923})
    // }
    // render(){
    //     return(
    //         <>
    //         <h1>Person details</h1>
    //         <p>My company:: {this.state.company}</p>
    //         <p>My Name:: {this.state.employeName}</p>
    //         <p>My Id:: {this.state.employeId}</p>
    //         <button onClick={this.Manage}>Submit</button>
    //         </>
            
    //     )
    // }

    this. defaultValue={
        FirstName:"",
        LastName:"",
        EmailId:""
     }

    // const [state ,setdefaultValue] = useState(defaultValue)

    // console.log(state)
    
    const handeling=(e)=>{

        let {name,value} = e.target;
    //    this.defaultValue
    //         ({
    //             // ...previous,
    //             [name] : value
    //          })
                  
        console.log(this.defaultValue)
        // console.log(name,value)
    }
   

    
    return(
        <>
        <form>
            <label>FirstName</label>
            <input type="text" name="FirstName"  value={this.defaultValue.FirstName} onChange={handeling}/>
            <label>LastName</label>
            <input type="text" name="LastName" value={this.defaultValue.LastName} onChange={handeling}/>
            <label>FirstName</label>
            <input type="email" name="EmailId" value={this.defaultValue.EmailId} onChange={handeling}/>
            <input type="Submit" name="Login"/>
        </form>
        </>
    )

}
}
export default StateExample;