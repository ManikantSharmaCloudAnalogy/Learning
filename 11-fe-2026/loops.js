//js loops
console.log("while loop");
let i=1;
while(i<=5)
{
    console.log("hello");
    i++;
}

console.log("do while loop");
do{
    console.log("hello")
}while(i<1)


//for loop
console.log("for loop");
for(let i=1;i<=5;i++){
    console.log("mani");
}


//for in loop 
console.log("for in loop")
let arr=[1,2,3,4,5]
for(i in arr){
    console.log(arr[i]);
}

//for each loop
console.log("for each loop");
let nums=[1,2,3,4,5];
nums.forEach(function forEachResult(val){
    console.log(val);

})