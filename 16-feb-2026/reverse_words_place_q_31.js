/*
Reverse words in place?
Ex:-output: i evol ym aidni
    input: i love my india
*/

/*
function reverseWords(str){
let words=str.split(" ");
let word="";
let reverseWord="";
let result=[];
for(let i=0;i<words.length;i++){
    word=words[i];
    reverseWord="";
    for(let j=word.length-1;j>=0;j--){
        reverseWord +=word[j];
    }
    result.push(reverseWord);
   
}
return result.join(" ");
}
let str="i love my india";
console.log(reverseWords(str));

*/

function reverseWords(str) {
    let reverseWord = "";
    let word = "";
    for (let i = 0; i <= str.length; i++) {
        let ch=str[i];
        if (i === str.length || ch === " ") {
            // Reverse the current word
            for (let j = word.length - 1; j >= 0; j--) {
                reverseWord += word[j];
            }  
            if (i !== str.length) {
                reverseWord += " ";
            }
            word = "";
        } else {
            word += ch;

        }
    }

    return reverseWord;
}

let str = "i love my india";
console.log(reverseWords(str));