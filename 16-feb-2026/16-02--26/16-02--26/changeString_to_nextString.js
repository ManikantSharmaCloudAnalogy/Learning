function nextString(str){
let alphabet ="abcdefghijklmnopqrstuvwxyz";
let result="";
for(let i=0;i<str.length;i++){
    let index=alphabet.indexOf(str[i]);
    if(index==-1){
        result=result+str[i];
    }
    else if(index==25){
       result=result+alphabet[0];
    }
    else{
        result=result+alphabet[index+1];
    }
}
return result;

}
console.log(nextString("crazy"));