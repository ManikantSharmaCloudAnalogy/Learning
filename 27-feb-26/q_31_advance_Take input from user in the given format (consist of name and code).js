/*
Take input from user in the given format (consist of name and code),
Find max digit from code which is less or equal to the length of string
And put that place char in the final string if there is no digit found which not satisfy the condition that simply put ‘x’

#Input: Abhishek:34848,Mayur:4739,Friends:2949,Yeah:9889
#Output: KueX"
*/

function solve(input) {
 let pairs = input.split(",");
let result = "";

 for (let i = 0; i < pairs.length; i++) {
let parts = pairs[i].split(":");
 let name = parts[0].trim();
 let code = parts[1].trim();

let maxDigit = -1;

 // check each digit in code
 for (let j = 0; j < code.length; j++) {
let digit = Number(code[j]);

if (digit <= name.length && digit > maxDigit) {
 maxDigit = digit;
 }
}

if (maxDigit === -1) {
result += "X";
} else {
 result += name[maxDigit - 1];
 }
 }
 console.log(result);
}

solve("Abhishek:34848,Mayur:4739,Friends:2949,Yeah:9889");