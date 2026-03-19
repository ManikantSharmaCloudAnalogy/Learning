//hoisting means all declaration on the top of the code in js 
console.log("example 1");
console.log(a);//undefined
var a=10;
//output undefined because declarationat the top by js but a is initialize after print ;


console.log("example 2");
// let and const also hoisted, js declare top of the code but we can't use let , const without assigning value because temoral dead zone- refrence error
console.log(b);
let b=20;

