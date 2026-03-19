let orderFood = new Promise((resolve,reject)=>{
    let foodReady=true;
    if(foodReady){
        resolve("food delivered"); }
    else{
        reject("food not delivered"); }
},2000);
orderFood.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(error);
});