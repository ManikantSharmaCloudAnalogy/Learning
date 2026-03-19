//find  first non repeating character in a string
function nonRepeatCharacter(str){
    count={};//empty object;
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(count[ch]){
            count[ch]=count[ch]+1;
        }
        else{
            count[ch]=1;
        }
    }
    for(let i=0;i<str.length;i++){
        let ch =str[i];
        if(count[ch]==1){
            return ch;
        }
    }
    return null;
}

console.log(nonRepeatCharacter('swiss'));