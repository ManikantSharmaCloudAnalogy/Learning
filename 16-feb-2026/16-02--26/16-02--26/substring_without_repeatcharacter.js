
/*function longestUniqueSubstring(str) {
    let maxLen = 0;      // length of longest substring
    let result = "";     // longest substring found

    for (let i = 0; i < str.length; i++) {
        let temp = "";   // current substring
        for (let j = i; j < str.length; j++) {
            if (temp.includes(str[j])) {
                // stop if character repeats
                break;
            }
            temp += str[j]; // add current character
        }
        if (temp.length > maxLen) {
            maxLen = temp.length;
            result = temp;
        }
    }

    return result;
}

// Examples:
console.log(longestUniqueSubstring("abcabcbb")); // "abc"
console.log(longestUniqueSubstring("bbbbb"));    // "b"
console.log(longestUniqueSubstring("pwwkew"));   // "wke"

*/
function LongestSubstring(str){
    let result="";
    let maxLength=0;
    for(let i=0;i<str.length;i++){
        let temp="";
        for(let j=i;j<str.length;j++){
            if(temp.includes(str[j])){
                break;
            }
            temp=temp+str[j];
        }
        if(temp.length>maxLength){
            maxLength=temp.length;
            result=temp;
        }
    }
return result;
}
console.log(LongestSubstring("abcabcbb"));