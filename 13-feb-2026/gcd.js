//euclidiean algorithm of  gcd
function gcd(a,b){
 while(b!==0){
    let temp=b;
    b=a%b;
    a=temp;
 }
 return a;
}
console.log(gcd(12,18));


//loop method
function hcf(a,b){
    let min = Math.min(a,b);
    let gcd=1;
    for(let i=1;i<=min;i++){
        if(a%i==0 && b%i==0){
            hcf=i
        }
    }
    return hcf;
}
console.log(hcf(12,18));