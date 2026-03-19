/*Given an n x n square matrix, print the sum of all sub-squares of size k x k where k is smaller than or equal to n. 
See the sample input. 
Input:-  size of input matrix = 3 
new matrix size = 2 
8 1 3 
2 9 3 
0 3 5 
Sample Output : 
20 16 
14 20 

*/
// Input matrix and k
const n = 3; // size of matrix
const k = 2; // size of sub-square

// Example input matrix
const matrix = [
  [8, 1, 3],
  [2, 9, 3],
  [0, 3, 5]
];

const resSize = n - k + 1;
const result = Array.from({ length: resSize }, () => Array(resSize).fill(0));
for (let i = 0; i < resSize; i++) {
  for (let j = 0; j < resSize; j++) {
    let subSum = 0;
    for (let p = i; p < i + k; p++) {
      for (let q = j; q < j + k; q++) {
        subSum += matrix[p][q];
      }
    }
    result[i][j] = subSum;
  }
}
for (let i = 0; i < resSize; i++) {
  console.log(result[i].join(' '));
}