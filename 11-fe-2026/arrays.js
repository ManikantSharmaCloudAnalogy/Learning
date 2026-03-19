let numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.length);

//map function - create new array and apply function to perform operation
console.log("map function");
let nums=[1,2,3,4];
let double=nums.map(num=>num*2)
console.log(double);
 

//filter function 
let arr=[1,2,3,4,,5];
let result=arr.filter(n=>3>n);
console.log("filter output");
console.log(result);

