function pointLiesCircle(r,x,y,a,b){
//find out the distance
let distance=Math.sqrt((a-x)*(a-x)+(b-y)*(b-y));
if(distance<r){
    console.log("points strictly lies in circle ");
}
else{
    console.log("points does not strictly lies in circle")
}
}

pointLiesCircle(4,2,3,4,5);