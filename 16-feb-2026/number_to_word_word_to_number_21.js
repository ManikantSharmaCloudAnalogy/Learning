/*
Write a function which convert the  number to word and word to number.
Digit 0 is replaced with 'a',1 is replaced with 'b' and so on,with digit 9 replaced by 'j'."
"Ex:-string = 'you'll n4v4r 6u4ss 8t: cdja' , the output will be 'you'll never guess it: 2390'"
*/

function convert(str){
let alphabets="abcdefghijklmnopqrstuvwxyz";
let result="";
for(let i=0;i<str.length;i++){
    let ch=str[i].toLowerCase();
    if(!isNaN(ch) && ch!=" "){
result += alphabets[ch];
    }
    //any space or special character
    else{
result=result+str[i];

    }
}
return result;
}
let str="you'll n4v4r 6u4ss 8t";
console.log(convert(str));


