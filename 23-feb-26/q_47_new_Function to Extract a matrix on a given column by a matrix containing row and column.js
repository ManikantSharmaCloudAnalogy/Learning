/*
"""Function to Extract a matrix on a given column by a matrix containing row and column.
Input: matrix=[[1,2,3],[3,4,5],[1,2,0]],2    
Output:[3,5,0]"""
*/

function extractColumn(matrix, colIndex) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i][colIndex]);
  }

  return result;
}

// Example
const matrix = [
  [1, 2, 3],
  [3, 4, 5],
  [1, 2, 0]
];

console.log(extractColumn(matrix, 2));