
import PropsComponent from "./PropsComponent";
function PropsChildcomponent(){
    const name={
        stdname:"Masthan",
        stdId:123
        }

    return(
        <>
            <div>
                <h1>Props</h1>
                <p>The is props component</p>
                <PropsComponent value = {name} study="hsgsh"/>
            </div>
         
        
        </>
    )
}
export default PropsChildcomponent;