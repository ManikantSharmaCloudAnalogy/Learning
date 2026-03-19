/* 
Given an input string with duplicate characters generate a string which does have all A's together in the front and other characters maintain their respective position.
Input Format: You will be given a function with String as argument.
Output Format:You need to return the string from the given function.
Sample TestCase 1 Input: ababacada 
Output: aaaaabbcd
*/
function test(str){
let aChar="";
let otherChar=""
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(ch=="a"){
        aChar=aChar+ch;
    }
    else{
        otherChar=otherChar+ch;
    }
}
return aChar+otherChar;
}
str="ababacada"
console.log(test(str));
//if i want all char in alphabetical order with repeatition 
/*
function test(str){
let aChar="";
let otherChar=""
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(ch=="a"){
        aChar=aChar+ch;
    }
    else{
        otherChar=otherChar+ch;
    }
}
    let otherCharSort= otherChar.split('').sort().join('');
return aChar+otherCharSort;
}
str="ababadca"
console.log(test(str));
*/