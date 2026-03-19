/*
"Given a String s, find the length of the longest prefix which is also a suffix. 
the prefix and suffix should not be overlap

Input abcdabc
Output:- 3
Input ababa
Output:-1"

*/
function test(str){
let n=str.length;
let len=Math.floor(n/2);
for(let i=len;i>0;i--){
    let prefix=str.substring(0,i);
    let suffix=str.substring(n-i);

if(prefix==suffix){
    return i;
}
}
return -1;
}
console.log(test("abcdabc"));