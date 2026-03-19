function maxArea(arr){
let left=0;
let right=arr.length-1;
let maxWater=0;
while(left<right){
    let width=right-left;
    let minHeight=arr[left]<arr[right]?arr[left]:arr[right];
    let area=width*minHeight;
    maxWater=maxWater>area?maxWater:area;
    if(arr[left]<arr[right]){
        left++;
    }
    else{
        right--;
    }
}
return maxWater;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));