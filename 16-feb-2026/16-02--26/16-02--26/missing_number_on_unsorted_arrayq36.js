//find missing number in unsorted array
let arr=[2,4,3,5,6,1,8];
let n=arr.length+1;
let totalSum=n*(n+1)/2;
let arrSum=0;
for(let i=0;i<arr.length;i++){
    arrSum += arr[i];
}
let missing=totalSum-arrSum;
 console.log(missing);