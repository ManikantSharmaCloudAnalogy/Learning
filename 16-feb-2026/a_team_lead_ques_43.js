/*a team lead start some codelanguage for traning. 
it assign some value to one alphabets like A=0,B=1..
findout the the pair which give total sum of provided number
*/

//a-97,A-65
let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let storeCode=[]
const target=10;
for(let i=0;i<alphabets.length;i++){
storeCode[i]=alphabets.charCodeAt(i)-65;
}

for(let i=0;i<storeCode.length;i++){
    for(let j=i+1;j<storeCode.length;j++){
        if(storeCode[i]+storeCode[j]==target){
            console.log([alphabets[i],alphabets[j]]);
        }
    }
}
    

