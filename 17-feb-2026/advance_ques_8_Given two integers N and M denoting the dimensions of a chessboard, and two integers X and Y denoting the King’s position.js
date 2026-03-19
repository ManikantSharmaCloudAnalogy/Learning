/*
Given two integers N and M denoting the dimensions of a chessboard, and two integers X and Y denoting the King’s position, i.e. the cell (X, Y). The task is to find the number of cells the Queen can visit that are not visited by the King if it gets replaced by the King. The King visits all his adjacent cells and the Queen can move diagonally, horizontally, and vertically.
Input: N = 8, M = 8, X = 1, Y = 1
Output: 18  Refer to the image in the comment for breif.
*/

function solve(N, M, X, Y) {

 let kingMoves = 0;
 let queenMoves = 0;
// 8 directions
 let directions = [
[-1,-1], [-1,0], [-1,1],
[0,-1], [0,1],
 [1,-1],[1,0],[1,1] ];

 // King Moves
 
 for (let d of directions) {
 let newX = X + d[0];
 let newY = Y + d[1];

 if (newX >= 1 && newX <= N && newY >= 1 && newY <= M) {
 kingMoves++;
 }
 }

 // Queen Moves
 for (let d of directions) {
 let newX = X + d[0];
let newY = Y + d[1];

 while (newX >= 1 && newX <= N && newY >= 1 && newY <= M) {
 queenMoves++;
 newX += d[0];
 newY += d[1];
 }
 }

 return queenMoves - kingMoves;
}

console.log(solve(8,8,1,1));