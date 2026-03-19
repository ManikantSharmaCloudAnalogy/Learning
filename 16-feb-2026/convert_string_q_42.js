//Convert string- take two string and check wheather the second strings word is exist in 1st string
// in incresing order if yes return true else return false.
//approach - two pointer i and match check one by one if str2 find then match++ otherwise check other iteration of i with str 2 match index 
function check(){
let str1="subsequence";
let str2="sue c"
let count=0;
for(let i=0;i<str1.length;i++){
if(str1[i]==str2[count]){
    count++;
}
if(count==str2.length){
    return true;
}
}
return false;
}
console.log(check());