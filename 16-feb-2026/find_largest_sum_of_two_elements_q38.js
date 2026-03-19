//Find the largest sum of any two elements in array?
//approach-> first sum  calculate after max to sum comparison for ppair update .
function largestSum(arr){
let sum=0;
let pair=[];
let max=-Infinity;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        sum=arr[i]+arr[j];
        if(sum>max){
            max=sum;
            pair=[arr[i],arr[j]];
        }
    }
}
console.log(`the sum is:${sum}`)
return pair;
}
let arr=[1,3,4,6,7];
console.log(largestSum(arr));