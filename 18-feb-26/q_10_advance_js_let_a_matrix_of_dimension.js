/*
"Let a matrix of dimensions N x M where N===M traverse the matrix down-up and print the output in an array.
Example:
Input 
[[1, 2, 3, 4], 
[5, 6, 7, 8], 
[9, 10, 11, 12], 
[13, 14, 15, 16]];
        Output 
[1,5,9,13,14,10,6,2,3,7,11,15,16,12,8,4]"
*/

//aproach -> for even 0,2,4,6 coln top to bottom traverse and for odd bottom to top like zig zag
function zigZagColumnTraversal(matrix) {
 let n = matrix[0].length;
 let result = [];

 for (let col = 0; col < n; col++) {

 // Even column → top to bottom
 if (col % 2 === 0) {
 for (let row = 0; row < n; row++) {
 result.push(matrix[row][col]);
 }
 }
 // Odd column → bottom to top
 else {
 for (let row = n - 1; row >= 0; row--) {
result.push(matrix[row][col]);
}
 }
 }

 return result;
}
console.log( zigZagColumnTraversal([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]))
    