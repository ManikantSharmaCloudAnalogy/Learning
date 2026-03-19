function primeNumber(n){
    let flag=0;
    if(n<=1){
        console.log("enter valid number ");
    }
    else{
    for(let i=2;i<=n/2;i++)
    {
       if(n%i==0){
           flag=1;
           break;
        }
        else{
            flag=0;
        }

        
    }
    if(flag==0){
        console.log(`${n} is a prime number`);
    }
    else{
        console.log(`${n} is not a prime number `);
    }
}
}
primeNumber(-10);