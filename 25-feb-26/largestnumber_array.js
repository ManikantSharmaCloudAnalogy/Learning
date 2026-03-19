function largest(arr){
let max=-Infinity;
let ressult=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
ressult.push(max);
return ressult
}
console.log(largest([32,35,37,39]));