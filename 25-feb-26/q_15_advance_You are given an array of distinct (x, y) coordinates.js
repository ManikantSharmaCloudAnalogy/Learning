/*
"You are given an array of distinct (x, y) coordinates. 
Create a function that returns how many rectangles these points form on the plane.
Example:
rectangles([[1, 1], [2, 1], [1, 2], [2, 2]]) ➞ 1
rectangles([[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [3, 2]]) ➞ 3

rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3]]) ➞ 10
// Note: We have a rectangle with vertices (2, 1), (3, 2), (2, 3), and (1, 2).
Don't forget to count rectangles that aren't parallel to the x- and y-axis (see example #3).
"
*/

function rectangles(points) { 
   let set = new Set();
let count = 0;
for (let i = 0; i < points.length; i++) {
 set.add(points[i][0] + "," + points[i][1]);
 }

 for (let i = 0; i < points.length; i++) {
 for (let j = i + 1; j < points.length; j++) {

 let x1 = points[i][0];
 let y1 = points[i][1];
 let x2 = points[j][0];
 let y2 = points[j][1];
  if (x1 === x2 || y1 === y2) continue;

 let p1 = x1 + "," + y2;
let p2 = x2 + "," + y1;

 if (set.has(p1) && set.has(p2)) {
 count++;
}
 }
 }

return count / 2;
}
console.log(rectangles([[1, 1], [2, 1], [1, 2], [2, 2]]));