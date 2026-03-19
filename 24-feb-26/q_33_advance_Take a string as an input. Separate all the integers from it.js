/*
"Take a string as an input. Separate all the integers from it. 
Then take each integer only once and form the larges even number possible. 
print the largest possible even number.And if even number can’t be made, then print -1
Note:-Even no should be unique
Input “QWERT@821142”
Output:-8412

Input: “Dilshhad73119755”
Output:- -1"

*/

function largerEven(str){
let digit=[];
let result=[];
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(ch>='0'&& ch<='9'){
        digit.push(Number(ch));
    }
}

digit=[...new Set(digit)];
let even = digit.filter((d)=>d%2==0);
if(even.length===0) return -1;
let last =Math.min(...even);
for(let j=0;j<digit.length;j++){
    if(digit[j]!=last){
        result.push(digit[j]);
    }
}
result.sort((a,b)=>b-a);
    return result.join('')+last;

}
console.log(largerEven("QWERT@821142"));