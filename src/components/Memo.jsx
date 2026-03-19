import { useMemo, useState } from "react";

export function Memo() {
    const [add,setAdd]=useState(0);
    const [minus,setMinus]=useState(100);
    const multiplication=useMemo(function multiply(){
        console.log("************");
        return add*100;
    },[add]);
  return <div>
<button onClick={()=>setAdd(add+1)}>Add{add}</button>
<br></br>
<br></br>
<button onClick={()=>setMinus(minus-1)}>Subtract{minus}</button>
<br></br>
{
    multiplication
}
  </div>;
}
