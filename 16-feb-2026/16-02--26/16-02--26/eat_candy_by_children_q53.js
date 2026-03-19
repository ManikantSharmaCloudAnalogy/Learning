function candyEaten(candy,child){
let candyPerChild=Math.floor(candy/child);
return candyPerChild*child;
}
console.log(candyEaten(10,3))


//reduce
let arr=[1,2,3,4,5];
let result=arr.reduce((acc,arr)=>{return acc+arr},0);
console.log(result)