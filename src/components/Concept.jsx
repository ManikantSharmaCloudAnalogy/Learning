import { useEffect,useState } from "react";
export function Concept(){
    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);
    const user=[
{id:1,age:22,name:"manikant"},
{id:2,age:23,name:"harry"},
{id:3,age:44,name:"rohit"}
];
useEffect(()=>{
hello();
},[count])
function hello(){
    console.log("hello");
}
return (
 <div>
    <button onClick={()=>setCount(count+1)}>counter {count}</button>
    <button onClick={()=>setData(data+1)}>Data{data}</button>
<table border="1" style={{borderCollapse:'collapse'}}>
    <thead>
        <tr>
            <td>id</td>
            <td>age</td>
            <td>name</td>
        </tr>
    </thead>
    <tbody>
        {
            user.map((user)=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.age}</td>
                    <td>{user.name}</td>
                </tr>
            ))
        }
    </tbody>
</table>
 </div>
)
} 
