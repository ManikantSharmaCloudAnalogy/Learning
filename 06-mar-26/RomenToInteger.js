function test(str){
    const obj={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let total=0;
    for(let i=0;i<str.length;i++){
        let cur =obj[str[i]];
        let next=obj[str[i+1]];
        if(cur<next){
            total=total-cur;
        }
        else{
            total=total+cur;
        }
    }
    return total;

}
console.log(test("III"))