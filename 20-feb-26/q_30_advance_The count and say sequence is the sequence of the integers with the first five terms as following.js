/*
"The count and say sequence is the sequence of the integers with the first five terms as following:-
Count VAlue
1.1
2.11.
3.21
4.1211
5.111221

1 is read off as “one 1” or 11
11 is read off as “two is” or 21.
21 is read off as “one 2, then one 1” pr 1211
Given an integer n where 1< n < 30, generate the nth term of the count and say sequence. You can do so recursively,
 in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

NOTE:- Each term of the sequence of integers will be represented as a string
"

*/
function countAndSay(n){
let result="1";
for(let i=2;i<=n;i++){
    let count =1;
    let temp="";
    for(let j=0;j<result.length;j++){
        if(result[j]===result[j+1]){
            count++;
        }
        else{
            temp=temp+count+result[j];
            count=1;
        }
    }
    result=temp;
}
return result;
}
console.log(countAndSay(3));