import { useEffect,useRef,useState } from "react"
    
function UseReferanceHook(){
    const inputData = useRef(null)
///useRef, it is not going re render,.current property will handle re-render
    const FromSubmission=(e)=>{
        e.preventDefault()
        console.log (inputData.current.value)
    }
    // useEffect(()=>{
    //     console.log("Mounting")
    // },[])
    

    return(
        <>
        <form onSubmit={FromSubmission}>
            <input type="text" placeholder="Enater Name" ref={inputData}/>
            <input type="Submit" name="Submit"/>
        </form>
        </>
    )
}
export default UseReferanceHook;