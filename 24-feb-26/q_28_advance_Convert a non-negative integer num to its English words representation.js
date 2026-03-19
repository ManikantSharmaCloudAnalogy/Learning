/*
 Convert a non-negative integer num to its English words representation.
Example 1:
Input: num = 123
Output: ""One Hundred Twenty Three""
Example 2:
Input: num = 12345
Output: ""Twelve Thousand Three Hundred Forty Five""."
*/
function wordRepresentation(num) {

 if (num === 0) return "Zero";

 const below20 = [
 "", "One", "Two", "Three", "Four",
 "Five", "Six", "Seven", "Eight", "Nine",
 "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
"Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
 ];

 const tens = [
 "", "", "Twenty", "Thirty", "Forty",
 "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

let result = "";

if (num >= 1000) {
 result += below20[Math.floor(num / 1000)] + " Thousand ";
 num %= 1000;
}

 if (num >= 100) {
 result += below20[Math.floor(num / 100)] + " Hundred ";
 num %= 100;
 }

if (num >= 20) {
 result += tens[Math.floor(num / 10)] + " ";
 num %= 10;
}

 if (num > 0) {
 result += below20[num] + " ";
}
 return result.trim();
}

console.log(wordRepresentation(123));
console.log(wordRepresentation(12345));
console.log(wordRepresentation(123));