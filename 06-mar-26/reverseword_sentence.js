let str="hello mani how are you";
let result="";
let word="";
for(let i=str.length-1;i>=0;i--){
    let ch=str[i];
    if(ch!==" "){
        word=word+ch;
    }
    else{
        result=result+word+" ";
        word=""
    }
}
console.log(result)