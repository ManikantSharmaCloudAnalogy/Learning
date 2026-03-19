/*
"Given a square 2D array of size N x N, print all the diagonal elements. 
Diagonal elements include: Input: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] Output:1 3 5 7 9" in js


*/

function printDiagonals(matrix) {
  const n = matrix.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    // Primary diagonal
    result.push(matrix[i][i]);

    // Secondary diagonal (avoid duplicate center element)
    if (i !== n - 1 - i) {
      result.push(matrix[i][n - 1 - i]);
    }
  }
result.sort((a, b) => a - b);
  console.log(result.join(" "));
}

// Example
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

printDiagonals(matrix);