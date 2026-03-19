let str="you'll n4v4r 6u4ss 8t:cdja" ;
let result="";
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(ch>="0" && ch<="9"){
result = result+String.fromCharCode(97+Number(ch));
    }
    else if(ch>="a" && ch<="j"){
        result=result+(ch.charCodeAt(0)-97);
    }
    else{
        result=result+ch;
    }
}
console.log(result);