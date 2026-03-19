let marks=72;
let result;
if(marks>=60){
result="pass";
}
else{
    result="fail";
}

switch(result){
    case "pass":
        console.log("promoted");
        break;
    case "fail":
        console.log("not promoted");
        break;
    default:
        console.log("invalid result");
}
