/*
Given an unsorted array, find the maximum difference between the successive 
elements in its sorted form.        
Example 1:  Input: [3,6,9,1]
                    Output: 3
Explanation: The sorted form of the array is [1,3,6,9], 
either  (3,6) or (6,9) has the maximum difference 3.
                         
Example 2:  Input: [10]
                    Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

*/
function maxDifference(arr){
    if(arr.length<2) return 0;
    arr.sort((a,b)=>a-b);
 let max=0;
    for(let i=0;i<arr.length-1;i++){
          let diff= arr[i+1]-arr[i];
          if(diff>max){
            max=diff;
          }
        }
        return max;
}
console.log(maxDifference([1,3,6,9]));