//given a sorted integer array that doesnot contain any duplicates , return a summary of the number ranges it contains
//[0,1,2,4,5,7]
//output-[0->2,4->5,7]
let arr=[0,1,2,4,5,7];
let result=[];
for(let i=0;i<arr.length;i++){
    let start=arr[i];
    while(arr[i]+1===arr[i+1]){
        i++;
    }
    if(start===arr[i]){
         result.push(start.toString());
    }
    else{
        result.push(start+ "->"+arr[i]);
    }
}
console.log(result);