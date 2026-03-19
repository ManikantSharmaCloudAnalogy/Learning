/* 
Check the given string can be obtained by one concatenation of some string to itself.
"Ex:- String1 = cloudcloud , output =  true
      String2 = qqq , output =  false
*/

function test(str){
    let n=str.length;
    if(n%2!==0){
    return false;
}
let first=str.slice(0,n/2);
let second=str.slice(n/2);
return first ==second;
}
console.log(test("cloudcloud"));
console.log(test("qqq"));