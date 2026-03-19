//Sort Array
console.log("sort array");
let temp=0
function sort()
{
    let arr=[1,4,2,5,6];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
if(arr[j]>arr[j+1]){
           temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
        }
        
    }
    console.log(arr);
}
sort();


//string reverse

function reverse(){
    console.log("reverse string");
    let str="mani";
let result='';
for(let i=str.length-1;i>=0;i--)
{
    result += str[i];
}
console.log(result);
}
reverse();

