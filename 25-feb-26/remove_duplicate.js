/*
function removeDuplicate(arr){
 let j=1;
 for(let i=0;i<arr.length-1;i++){
    if(arr[i]!==arr[i+1]){
        arr[j]=arr[i+1];
        j++;
    }
 }
 return arr.slice(0,j);
}
console.log(removeDuplicate([1,2,2,3,6,6]))
*/

let arr=[1,2,2,3,4,4,4,4,4,4,4,5,6,8,8,8,8,7,9,9];
let flag=0;
let result=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
        flag=1;
    }
    if(flag==0){
        result.push(arr[i]);
    }
    flag=0;
}
console.log(result);