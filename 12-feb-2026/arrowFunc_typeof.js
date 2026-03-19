

//arrow function ES6
test=()=>{
    console.log("hlo");
}

//callback function 
function testing(name,callback){
    console.log("testing");
    callback();
}

function hlo(){
    console.log("hlo");
}

testing("mani",hlo);
