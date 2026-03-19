function isValid(grid, r, c, n, expVal) {
if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] !== expVal) {
 return false;
 }
 if (expVal === n * n - 1) {
 return true;
}

 // 8 possible knight moves
const ans1 = isValid(grid, r - 2, c + 1, n, expVal + 1);
 const ans2 = isValid(grid, r - 1, c + 2, n, expVal + 1);
const ans3 = isValid(grid, r + 1, c + 2, n, expVal + 1);
 const ans4 = isValid(grid, r + 2, c + 1, n, expVal + 1);
 const ans5 = isValid(grid, r + 2, c - 1, n, expVal + 1);
 const ans6 = isValid(grid, r + 1, c - 2, n, expVal + 1);
 const ans7 = isValid(grid, r - 1, c - 2, n, expVal + 1);
 const ans8 = isValid(grid, r - 2, c - 1, n, expVal + 1);
 return ans1 || ans2 || ans3 || ans4 || ans5 || ans6 || ans7 || ans8;
}
console.log(isValid([[0,3,6],[5,8,1],[2,7,4]],0,0,3,0));