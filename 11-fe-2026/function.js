function sum(a,b){
    console.log(a+b);
}
console.log("sum fun result");
sum(2,3);

//function uses as a value /expression
let x=2;
let y=3;
let result= function sample(x,y){
return x+y;
console.log(x+y);
}
console.log(result);


//arrow function ES6
test=()=>{
    console.log("hlo");
}

//callback function 
function testing(name,callback){
    console.log("testing");
    callback();
}

function hlo(){
    console.log("hlo");
}

testing("mani",hlo);


//object code 

console.log("object code ");

let user={
    name:'mani',
    age:22,
    title:'trainee'
}

user.adress="dhanaura";
for(let usr in user){
    console.log(user[usr]);
}

const person={
    name:"mani",
    age:22
}
console.log("using object entries method");
console.log(Object.entries(person))
//we can use object.entries and object.values() method

/* object destructuring

name = person.name;
age=person.age;
*/