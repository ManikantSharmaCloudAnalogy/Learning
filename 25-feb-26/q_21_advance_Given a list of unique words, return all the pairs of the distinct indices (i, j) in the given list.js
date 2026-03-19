/*
"Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list,
 so that the concatenation of the two words words[i] + words[j] is a palindrome.                        
Example 1:  Input: words = [""abcd"",""dcba"",""lls"",""s"",""sssll""]
                    Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are [""dcbaabcd"",""abcddcba"",""slls"",""llssssll""]

Example 2:  Input: words = [""bat"",""tab"",""cat""]
                    Output: [[0,1],[1,0]]
Explanation: The palindromes are [""battab"",""tabbat""]

Example 3:  Input: words = [""a"",""""]
                    Output: [[0,1],[1,0]]"

*/


function palindrome(words)
{
let result=[];
for(let i=0;i<words.length;i++){
    for(j=0;j<words.length;j++){
        if(i==j){
            continue;
        }
        let str=words[i]+words[j];
        let reverse=str.split('').reverse().join('');
        if(str==reverse){
            result.push([i,j]);
        }
    }
}
return result;
}

console.log(palindrome( ["bat","tab","cat"]));