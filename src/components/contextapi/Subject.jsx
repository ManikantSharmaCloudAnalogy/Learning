import { useContext } from "react"
import { subjectContext } from "./ContextData"

export function Subject(){
    const sub= useContext(subjectContext);
    return(
        <div style={{backgroundColor:"pink",margin:"50px"}}>
<h1>subject is :<span style={{color:"blue"}}>{sub}</span></h1>
        </div>
    )
}