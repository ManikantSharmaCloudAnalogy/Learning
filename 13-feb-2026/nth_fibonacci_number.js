//nth fibonacci number
function fibonacci(n){
    let a=0;
    let b=1;
    let next=0;
    if(n==0 || n==1){
        console.log(`fibonacci of ${n} is:${n}`);
    }
    for(let  i=2;i<=n;i++){
         next=a+b;
        a=b;
        b=next;
    }
    console.log(`fibonacci of ${n} is : ${next}`);
}

fibonacci(6);