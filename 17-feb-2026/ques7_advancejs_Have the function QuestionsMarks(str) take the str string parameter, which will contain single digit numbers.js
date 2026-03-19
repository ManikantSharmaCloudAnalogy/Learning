/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers,
 letters, and question marks, 
 and check if there are exactly 3 question marks between every pair of two numbers that add up to 7. 
 If so, then your program should return the string true, otherwise it should return the string false.
  If there aren't any two numbers that add up to 7 in the string, then your program should return false as well.
For example: If str is "arrb3???4xxbl5???eee2" then your program should return true because there are exactly 
3 question marks between 3 and 4, 
and 3 question marks between 5 and 2 at the end of the string.
Examples
Input: "aa6?9"
Output: false
 
Input: "acc?7??sss?0rr2??????5"
Output: true

*/
function QuestionsMarks(str){

let foundPair = false;

 for(let i = 0; i < str.length; i++){

 if(!isNaN(str[i])){
 let firstNumber = Number(str[i]);
  let quesMarkCount = 0;

 for(let j = i + 1; j < str.length; j++){

 if(str[j] === "?"){
quesMarkCount++;
 }

 if(!isNaN(str[j])){

let secNumber = Number(str[j]);

if(firstNumber + secNumber === 7){
 foundPair = true;

 if(quesMarkCount !== 3){
 return false;
 }
 }

 break; 
 }
 }
 }
}

return foundPair;
}

console.log(QuestionsMarks("arrb3???4xxbl5???eee2"));
