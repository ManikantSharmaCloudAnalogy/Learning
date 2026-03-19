//two element sum in array given target number
let arr=[1,2,4,5,7,11,15];
let target=6;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===target){
   console.log([arr[i],arr[j]]);
        break;
      }
      
    }
}
