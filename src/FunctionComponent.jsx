import { useState } from 'react';
import ExampleComponent from './ClassComponent';
import StateExample from './StateComponent';


function SampleComponent(props){
     console.log(props)
    
    const [ count , setcount ] = useState(0)
    return(
        <div>
            { <section>
                {/* <div> First Person:{name}Masthan</div>
                <div>Second Person:{name}Rao</div> */}
                {/* <div>Access My Name <b>{name}</b></div> */}
                <p>Counter:{count}</p>
                <button onClick={()=>{setcount(count + 2)}}>Run</button>
            </section> }
            {/* { <ExampleComponent/> */}
            <StateExample/>
             

        </div>
    )
}
export default SampleComponent;