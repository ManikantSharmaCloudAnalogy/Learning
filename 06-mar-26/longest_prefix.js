function prefix(str){
    if(str==null || str.length==0) return "";
    stringPrefix=str[0];
    for(let i=0;i<str.length;i++){
        while(str[i].indexOf(stringPrefix)!==0){
        stringPrefix=stringPrefix.substring(0,stringPrefix.length-1);
        if(stringPrefix.length===0){
            return "";
        }
        }
    }
return stringPrefix;
}
console.log(prefix(["flow","flower","flood"]));