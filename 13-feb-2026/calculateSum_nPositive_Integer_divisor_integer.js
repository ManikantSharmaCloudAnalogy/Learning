//write a JS program to calculate the sum n+n/2+n/4+n/8... where n is a positive integer and all divisons are integers .
function sumInteger(n){
    let sum=0;
    if(n<0){
        console.log("enter correct positive integer");
    }
while(n>0){
    sum =sum+n;
    n=Math.floor(n/2);// we can use n>>1 for divide n by 2
}
return sum;
}
console.log(sumInteger(12));
