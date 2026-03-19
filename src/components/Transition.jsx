import { useState, useTransition } from "react";

export function Transition(){
    const [isPending,startTransition]=useTransition();
    const [value,setValue]=useState("");
   const  handleChange=(e)=>{
const newVal=e.target.value;
 startTransition(() => {
      setValue(newVal);
    });
    }
return(
    <div>
       <input type="text" onChange={handleChange} />
       {isPending && <p>Loading...</p>}
       {value}
    </div>
)
}