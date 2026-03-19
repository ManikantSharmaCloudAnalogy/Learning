
//to iterate over the value iterator approach 
console.log("for of loop")
let arr=[1,2,3,4,5];
for(let item of arr){
    console.log(item);
}

//reduce method
result=arr.reduce((acc , curr)=>{
    return acc+curr;
});
console.log("reducer output");
console.log(result);

//map function
res=arr.map((num)=>num*2);
console.log("map function output");
console.log(res);

//filter function

ress= arr.filter((n)=>{
 return n>3
});
console.log("filter function output");
console.log(ress);