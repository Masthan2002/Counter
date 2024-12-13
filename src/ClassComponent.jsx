import React from "react"

class  ExampleComponent extends React.Component{
    constructor(){
        super()
        this.Course = {
         CourseNmae : "java",
         Student : [{
            StudentNmae : "Masthan",
            StudentId : 77
         },{
        
            StudentName : "Rao",
            StudentId : 78
           
        
         }]
        }
          
        
    }
        render(){
        return(
            <>
            <h1>Hello React</h1>
            <p> My Coures name :::: {this.Course.CourseNmae}</p>
            <p>My Name ::: {this.Course.Student[0].StudentNmae}</p>
            <p>My Id  ::: {this.Course.Student[0].StudentId}</p>
            <p> My Coures name :::: {this.Course.CourseNmae}</p>
            <p>My Name ::: {this.Course.Student[1].StudentNmae}</p>
            <p>My Id  ::: {this.Course.Student[1].StudentId}</p>
            </>

        )

    }
}
export default ExampleComponent;