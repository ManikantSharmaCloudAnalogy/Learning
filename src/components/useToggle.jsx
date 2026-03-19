import { useState } from "react";
const useToggle=(defaultVal)=>{
const[val,setVal]=useState(defaultVal);
function toggleVal(newVal){
    if(typeof newVal!="boolean"){
        setVal(!val);
    }
    else{
        setVal(newVal);
    }
}
return [val,toggleVal];
}
export default useToggle;