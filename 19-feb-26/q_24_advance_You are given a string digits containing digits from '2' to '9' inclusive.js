/*
You are given a string digits containing digits from '2' to '9' inclusive. 
Each digit maps to a set of letters like on a classic telephone keypad:
2 -> ""abc""  
3 -> ""def""  
4 -> ""ghi""  
5 -> ""jkl""  
6 -> ""mno""  
7 -> ""pqrs""  
8 -> ""tuv""  
9 -> ""wxyz""
Your task is to return all possible letter combinations that the number could represent.
* Combinations can be returned in any order.
* If the input is empty, return an empty list [].
Input
* A string digits containing digits '2' through '9'.
Output
* A list of strings representing all possible letter combinations.
Examples
Example 1
Input:
digits = ""23""
Output:
[""ad"",""ae"",""af"",""bd"",""be"",""bf"",""cd"",""ce"",""cf""]
Explanation:
* Digit '2' maps to ""abc""
* Digit '3' maps to ""def""
* All possible combinations by taking one letter from each digit:
a + d = ""ad""  
a + e = ""ae""  
a + f = ""af""  
b + d = ""bd""  
b + e = ""be""  
b + f = ""bf""  
c + d = ""cd""  
c + e = ""ce""  
c + f = ""cf""
Example 2
Input:
digits = """"
Output:
[]
Explanation:
* There are no digits, so no combinations can be formed.
Example 3
Input:
digits = ""2""
Output:
[""a"",""b"",""c""]
Explanation:
* Digit '2' maps to ""abc""
* Only one digit, so the combinations are just its letters."
*/
function combination(digits){
    if(digits.length===0){
        return [];
    }
const obj= {
   '2':'abc',
   '3':'def',
   '4':'ghi',
   '5':'jkl',
   '6':'mno',
   '7':'pqrs',
   '8':'tuv',
   '9':'wxyz'
};
let result=[""];
for(let i=0;i<digits.length;i++){
    let letters=obj[digits[i]];
    let temp=[];
for(let j=0;j<result.length;j++){
    for(let k=0;k<letters.length;k++){
        temp.push(
            result[j]+[letters[k]]);
    }
}
result=temp;
}
return result;
}
console.log(combination("2"));
