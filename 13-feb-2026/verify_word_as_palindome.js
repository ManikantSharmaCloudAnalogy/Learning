function palindromeWord(word){
let reverse='';
for(let i=word.length-1;i>=0;i--){
    reverse += word.charAt(i);
}
if(word==reverse){
    console.log(`${word}:is palindrome word`);
}
else{
    console.log(`${word} :is not a palindrome word`);
}
}

palindromeWord('level');