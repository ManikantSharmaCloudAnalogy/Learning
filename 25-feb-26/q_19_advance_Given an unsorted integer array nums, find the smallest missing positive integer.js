/*

Given an unsorted integer array nums, find the smallest missing positive integer.
Example 1:  Input: nums = [1,2,0]
                    Output: 3
                        
Example 2:  Input: nums = [7,8,9,11,12]
                    Output: 1
*/

function findMissing(arr){
    arr.sort((a,b)=>a-b);
let missing=1;
for(let i=0;i<arr.length;i++){
if(arr[i]==missing){
    missing++;
}
else if(arr[i]>missing){
    break;
}
}
return missing;
}

console.log(findMissing([1,2,3,4,6]));