/*

String to Integer
Problem:
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer. The function should disregard leading white spaces, handle signs, and take into account potential overflow/underflow.

Example 1:
Input: "42"
Output: 42
Example 2:
Input: " -42"
Output: -42
Example 3:
Input: "4193 with words"
Output: 4193

*/
function myAtoi(str){
    let result=[];
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            continue; 
        }
        else if(str[i]>='a' && str[i]<='z') {continue;}
         else if(str[i]>='0' && str[i]<='9'){ 
            result.push(Number(str[i]));
        }
    }
    return result.join("");
}
console.log(myAtoi("-42 hello "));