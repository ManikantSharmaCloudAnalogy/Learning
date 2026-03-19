function test(arr){
let maxCount=0;
let count=0;
for(let num of arr){
    if(num===1){
        count++;
        maxCount=Math.max(maxCount,count);
    }
    else{
        count=0;
    }
}
return maxCount;
}
console.log(test([1,0,1,1,1,1,0,1,1]));