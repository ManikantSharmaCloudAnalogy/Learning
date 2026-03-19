/*
Question 1:-
Problem: Given an array of strings, group the anagrams together.
Example 1:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
*/
function test(input) {
  const result = {}; 

  for (let i of input) {
    let  sortedinput = i.split('').sort().join(''); 
    if (!result[sortedinput]) {
      result[sortedinput] = [];
    }
    result[sortedinput].push(i);
  }
  return result;
};
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(test(input)); 
