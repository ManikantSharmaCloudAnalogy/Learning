/*
Given an m x n matrix, return the length of the longest increasing path in matrix.
From each cell, you can either move in four directions: left, right, up, or down. 
You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed). 
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

*/
function longestIncreasingPath(matrix){
    if(!matrix || matrix.length===0){
        return 0;
    }
    let rows =matrix.length;
    let cols = matrix[0].length;

    //now using dp array 
    let dp=Array.from({length:rows},()=>Array(cols).fill(0));

    let directions=[
        [0,1],//right
        [0,-1],//left
        [1,0],//down
        [-1,0] //up
    ]
    function dfs(r,c){
        //if already calculate
        if(dp[r][c]!==0)
            {return dp[r][c];}
        let maxLength=1;//max path length is 1 

        for(let [dr,dc] of directions){
            let newRow=r+dr;
            let newCol=c+dc;
        //check boundary
        if( newRow >=0 && 
            newRow <rows &&
            newCol >=0 &&
            newCol<cols &&
            matrix[newRow][newCol]>matrix[r][c]
          ) {
                let length=1+dfs(newRow,newCol);
                maxLength=Math.max(maxLength,length);
            }
    }
    dp[r][c]=maxLength;//store result of max length
    return maxLength;
}
let result=0;
for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        result=Math.max(result,dfs(i,j));
    }
}
return result;
}

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));