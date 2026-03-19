function LongestString(){
let str=["abha","mam","javascript","coding"];
 maxLength=0;
 let longestLengthString=[];
for(let i=0;i<str.length;i++){
   
    if(str[i].length>maxLength){
        maxLength=str[i].length;
    }
}

for(let j=0;j<str.length;j++){
    if(str[j].length===maxLength){
        longestLengthString.push(str[j]);
    }
}
console.log(longestLengthString);
}
LongestString();