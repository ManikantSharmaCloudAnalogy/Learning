import { Subject } from "./Subject";

export function Student(){
    return(
        <div style={{backgroundColor:"green",margin:"50px"}}>
            <h1>Student component </h1>
            <Subject  />
        </div>
    )
}