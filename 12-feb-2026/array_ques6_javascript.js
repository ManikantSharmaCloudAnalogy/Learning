function sortRange(arr,a,b){
    let result=[];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>=a && arr[i]<=b){
        result=result+" "+arr[i];
    }

}
console.log(result);
}

let arr=[1,2,3,4,5];
sortRange(arr,3,5);