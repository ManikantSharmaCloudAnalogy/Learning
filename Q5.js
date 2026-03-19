/*
Question 5:-
Given an array of integers and an integer target k, find the total number of contiguous subarrays whose sum equals k.
Example: Input: nums = [1, 2, 3], k = 3
Output: [[1,2] [3]] 

*/

function test(nums,k){
    let result=[];
        for(let p=0;p<nums.length;p++){
            for(let q=p+1;q<nums.length;q++){
                if(nums[p]+nums[q]===k){
                    result.push([nums[p],nums[q]]);
                }
            }
        }
         for(let i=0;i<nums.length;i++){
        if(nums[i]==k){
            result.push([nums[i]]);
        }
    }
return result
}

let nums=[1,2,3];
let k=3;
console.log(test(nums,k))