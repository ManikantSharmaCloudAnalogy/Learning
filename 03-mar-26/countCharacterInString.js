let str="hello";
let result={};
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(!result[ch]){
        result[ch]=0;
    }
    result[ch]++;
}
console.log(result);