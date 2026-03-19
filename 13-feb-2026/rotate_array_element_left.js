//rotate left array element with length 3
function rotate(arr){
    temp=arr[0];
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=temp;
    return arr;
}
let arr=[1,2,3]
console.log(rotate(arr));