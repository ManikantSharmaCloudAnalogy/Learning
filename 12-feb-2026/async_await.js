function getData(success)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
            resolve("data acceseed");}
            else{
                reject("data not acesseed");
            }
        })
    },2000)
}

async function showData(){
 try{
    const result= await getData(false);
    console.log(result);
 }
 catch(error){
    console.log("data not acessed");

 }
}
showData();