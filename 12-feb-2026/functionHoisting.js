
console.log("function hoisting");
sayHello();
function sayHello(){
    console.log("hello");
}

console.log("function expression");
test();// type error
var test=function(){
    console.log('hi');
}
//because var test hoisted but test(); undefined