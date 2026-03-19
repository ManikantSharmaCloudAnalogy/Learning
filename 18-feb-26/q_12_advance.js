/*
"You are stuck in a multi-storey car parking lot. Your task is to exit the car park using only the staircases. Exit is always at the bottom right of the ground floor.

Create a function that takes a two-dimensional array where:

Free car parking spaces are represented by a 0
Staircases are represented by a 1
Your starting position is represented by a 2 and can be at any level of the car park.
Exit is always at the bottom right of the ground floor.
You must use the staircases (1) to go down a level.
Each floor will have only one staircase apart from the ground floor which will not have any staircases.

... and returns an array of the quickest route out of the car park.

Explanation:
arr = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

 Starting from 2, move to left 4 times = ""L4""
 Go down from stairs 1 step = ""D1""
 Move to right 4 times to exit from right bottom corner = ""R4""

result = [""L4"", ""D1"", ""R4""]

Example:
parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) ➞ [""L4"", ""D1"", ""R4""]

parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ [""R3"", ""D2"", ""R1""]

Starting from 2, move to right 3 times = ""R3""
 Go down from stairs 2 steps = ""D2""
 Move to right 1 step to exit from right bottom corner = ""R1""
parking_exit([[0, 0, 0, 0, 2]]) ➞ []
You are already at the bottom right corner."


*/
function parking_exit(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let result = [];

  let r, c;

  // Step 1: find starting point (2)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === 2) {
        r = i;
        c = j;
      }
    }
  }

  // Step 2: already at exit
  if (r === rows - 1 && c === cols - 1) return [];

  let downSteps = 0;

  // Step 3: move floor by floor
  while (r < rows - 1) {
    let stairCol = arr[r].indexOf(1);

    if (stairCol !== -1) {
      let diff = stairCol - c;

      if (diff > 0) result.push(`R${diff}`);
      if (diff < 0) result.push(`L${Math.abs(diff)}`);

      c = stairCol;
    }

    r++;
    downSteps++;
  }

  if (downSteps > 0) {
    result.push(`D${downSteps}`);
  }

  // Step 4: move to exit
  let rightMoves = (cols - 1) - c;
  if (rightMoves > 0) {
    result.push(`R${rightMoves}`);
  }

  return result;
}
console.log(parking_exit([
      [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]));