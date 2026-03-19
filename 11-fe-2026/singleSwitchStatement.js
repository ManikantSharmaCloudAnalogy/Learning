let obj={
    name:'manikant',
    age:22,
    adress:'dhanaura'
};
function doubleNumeric(obj){
    for(let i in obj){
        switch(typeof obj[i]){
            case "number":
                obj[i]=obj[i]*2;
                break;
        }
    }
}

doubleNumeric(obj);
console.log(obj);

