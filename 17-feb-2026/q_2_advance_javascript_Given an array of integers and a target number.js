/*
Given an array of integers and a target number. 
Find out the count of all subsets such that the sum of all the numbers in the 
subset is equal to a target number For Example:
 Input: [1 2 3 4 5] target: 5 Count: 3 Subsets are [ [ 1,4 ] , [2,3] , [5] ]
Input Format :You will be given a function which will 
take integer array as argument 1 and a target as second argument.
 Output Format:-Return the count of the subset from the function.
Sample TestCase 1
   Input
    5
    1 2 3 4 5
   Output
    3
*/

function countSubset(arr,target){
let count =0;
for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            count++;
        }
    }
    for(let j=0;j<arr.length;j++){
        for(let k=j+1;k<arr.length;k++){
            if(arr[j]+arr[k]===target){
                count++;
            }
        }
    }
return count;
}
console.log(countSubset([3,8,9,5],5));