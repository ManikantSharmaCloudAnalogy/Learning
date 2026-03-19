/*
"Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is [""(1,2)"", ""(2,4)"", ""(7,2)""], then this forms the following tree: Refer to the Image in the comment


which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
Examples
Input: [""(1,2)"", ""(2,4)"", ""(5,7)"", ""(7,2)"", ""(9,5)""]
Output: true
Input: [""(1,2)"", ""(3,2)"", ""(2,12)"", ""(5,2)""]
Output: false"

*/


function TreeConstructor(strArr) {
  let parents = [];//store parent of child
  let childrenCount = [];//store how many child of parents

  for (let i = 0; i < strArr.length; i++) {
    let pair = strArr[i]
      .replace(/[()]/g, "")
      .split(",");

    let child = Number(pair[0]);
    let parent = Number(pair[1]);

    // Rule 1: only one parent of child
    if (parents[child] !== undefined) {
      return "false";
    }
    parents[child] = parent;

    // Rule 2: max 2 child of parent 
    childrenCount[parent] = (childrenCount[parent] || 0) + 1;
    if (childrenCount[parent] > 2) {
      return "false";
    }
  }

  // Rule 3: exactly one root
  let rootCount = 0;

  for (let i = 0; i < childrenCount.length; i++) {
    if (childrenCount[i] !== undefined && parents[i] === undefined) {
      rootCount++;
    }
  }

  return rootCount === 1 ? "true" : "false";
}


console.log( TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));