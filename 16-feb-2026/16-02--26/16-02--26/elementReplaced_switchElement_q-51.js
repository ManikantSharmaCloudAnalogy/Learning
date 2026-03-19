//element replaced with given element 

function elementReplaced(arr,replace,switch_element){
for(let i=0;i<arr.length;i++){
    if(replace==arr[i]){
        arr[i]=switch_element;
    }
}
return arr;
    
}

let arr=[1,2,3,4,4];
console.log(elementReplaced(arr,2,5));