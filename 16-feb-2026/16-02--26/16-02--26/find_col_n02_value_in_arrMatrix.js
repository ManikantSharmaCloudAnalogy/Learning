//function to extract a matrix on a given column by a matrix containing rows and column 
let arr=[[1,2,3],[3,4,5],[1,2,0]];
function test(arr,col){
    let result=[];
for(let i=0;i<arr.length;i++){
 result.push(arr[i][col]);
}
return result;
}
console.log(test(arr,2));