import { useState } from "react";
import PropsChildcomponent from "./PropsChildComponent"

function PropsComponent(Props){
    console.log(Props)

   
    return(
        <div>
            <section>
                {Props.value.stdname}
                {Props.value.stdId}

            </section>
            
        </div>
    )
}
export default PropsComponent;