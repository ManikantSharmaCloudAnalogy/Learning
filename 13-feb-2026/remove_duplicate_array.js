//remove duplicate from an array
let arr=[1,2,3,4,4,5,5,6,3];
let result=[];
for(let i=0;i<arr.length;i++)
{
let flag=0;
for(let j=0;j<result.length;j++){
if(arr[i]==result[j]){
    flag=1;
    break;
}
}
if(flag==0){
    result.push(arr[i]);
}
}
console.log(result);

