//checking  all prime factor of a number
function checkFactorPrime(n){
    let factors=[];
    while(n%2==0){
        factors.push(2);
        n=n/2;
    }
    for(let i=3;i*i<=n;i+=2){
        if(n%i==0){
            factors.push(i);
            n=n/i;
        }
    }

    if(n>2){
        factors.push(n);
    }
    return factors;
}
let result= checkFactorPrime(10);
console.log(result);