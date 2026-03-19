import { useEffect, useState } from "react";
import { PostApi } from "./PostApi";
export function ApiCall(){
    const [data,setData]=useState([]);
useEffect(()=>{
getUserData();
},[])
async function getUserData(){
   const url = "https://dummyjson.com/users";
    let res=await fetch(url);
    res=await res.json();
    setData(res.users);
}
console.log(data);
    return(
    <div>
        <h3>fetch data from api</h3>
        {
           data && data.map((user)=><h6>{user.firstName}</h6>)
        }
        <hr></hr>
        <h3>post api </h3>
        <PostApi />
    </div>
)
}