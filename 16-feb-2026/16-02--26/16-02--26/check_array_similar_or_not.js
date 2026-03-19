//similar array 
function similarArray(a,b){
    if(a.length!==b.length){
        return false;
    }
    a.sort((x,y)=>x-y);
    b.sort((x,y)=>x-y);
    for(let i=0;i<a.length;i++){
if(a[i]!=b[i]){
    return false;   
    break;
}
    }
    return true;
}

console.log(similarArray([1,2,2],[2,1,1]));
console.log(similarArray([3,2,1],[1,2,3]))