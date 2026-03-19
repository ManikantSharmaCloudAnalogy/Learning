function myCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const add=myCounter();
console.log(add());
console.log(add());
console.log(add());