import { useRef, useState } from "react"


  function SampleControlCmp(){
    const defaultValue={
        FirstName:"",
        LastName:"",
        EmailId:""
     }

    const [state ,setdefaultValue] = useState(defaultValue)

    // console.log(state)
    
    const handeling=(e)=>{

        let {name,value} = e.target;
        setdefaultValue((previous)=>
            ({
                ...previous,
                [name] : value
             })
        )           
        console.log(state)
        // console.log(name,value)
    }
   

    
    return(
        <>
        <form>
            <label>FirstName</label>
            <input type="text" name="FirstName"  value={state.FirstName} onChange={handeling}/>
            <label>LastName</label>
            <input type="text" name="LastName" value={state.LastName} onChange={handeling}/>
            <label>FirstName</label>
            <input type="email" name="EmailId" value={state.EmailId} onChange={handeling}/>
            <input type="Submit" name="Login"/>
        </form>
        </>
    )
}
export default SampleControlCmp;