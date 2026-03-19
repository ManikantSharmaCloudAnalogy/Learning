//properties in object 

let user={
    name:"mani",
    age:22,
    adress:"dhanaura",
    title:
    {
        tech:"IT",
        role:"trainee"
    }
}
console.log("access property");
//access object properties
let name=user["name"];
let age=user.age;
console.log(name,age);

//add property
 user.nationality = "indian" ;

 console.log(user);

//delete property
console.log("delete nationality property")
 delete user.nationality;
 console.log(user);


 