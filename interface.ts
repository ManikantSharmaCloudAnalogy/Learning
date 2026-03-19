interface Info{
    name:string,
    age:number,
    college:string
}
interface Tech extends Info{
    department:string;
}
var studentobj:Info={
    name:"mani",
    age:22,
    college:"IMS"
}
var teacherobj:Tech={
    name:"mani",
    age:56,
    college:"IMS",
    department:"cs"
}
console.log(studentobj);
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(): Promise<User> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data: User = await res.json();
  return data;
}

fetchUser().then((user) => {
  console.log(user.name);
});