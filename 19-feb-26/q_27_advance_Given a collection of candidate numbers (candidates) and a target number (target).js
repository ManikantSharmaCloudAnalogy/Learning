/*
Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the 
candidate numbers sum to target. 
Each number in candidates may only be used once in the combination. 
Note: The solution set must not contain duplicate combinations. 
Input: candidates = [10,1,2,7,6,1,5], target = 8 Output: [[1,1,6],[1,2,5],[1,7],[2,6]] 
Example 2: Input: candidates = [2,5,2,1,2], target = 5 Output: [[1,2,2],[5]]"
*/
function test(candidates, target) {
 candidates.sort((a, b) => a - b); // duplicates handle karne ke liye sort
 let result = [];

 function backtrack(start, path, sum) {
 if (sum === target) {
result.push([...path]);
return;
 }

 if (sum > target) return;

 for (let i = start; i < candidates.length; i++) {

 // duplicate skip
if (i > start && candidates[i] === candidates[i - 1]) {
continue;
 }

 path.push(candidates[i]);
 backtrack(i + 1, path, sum + candidates[i]); 

 path.pop(); // backtrack
 }
 }

 backtrack(0, [], 0);
 return result;
}

console.log(test([10,1,2,7,6,1,5], 8));
