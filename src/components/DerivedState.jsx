import { useState } from "react";
export function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;
  const handleAddUser=()=>{
setUsers([...users,user]);
setUser("");
  }
  return (
    <div>
      <h3>Total:{total}</h3>
      <h3>last:{last}</h3>
      <h3>unique:{unique}</h3>
<input type="text"value={user} placeholder="enter user " onChange={(e)=>setUser(e.target.value)} />
<button onClick={handleAddUser}>Click to addUser</button>
{
    users.map((item,index)=><h4 key ={index}>{item}</h4>)
}
    </div>
  );
}
