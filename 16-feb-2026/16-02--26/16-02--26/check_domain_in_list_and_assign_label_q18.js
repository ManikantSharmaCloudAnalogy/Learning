//check domain in a list according to that assign label
/*function domainCheck(){
    let domains=["en.wikipedia.org","onlinesbi.com","happy.net","code.info"];
    let result=[];
    for(let i=0;i<domains.length;i++){
        if(domains[i].includes(".org")){
            result.push("company");
        }
        else if(domains[i].includes(".com")){
            result.push("Bussiness");
        }
        else if(domains[i].includes(".net")){
            result.push("CallingService");
        }
        else if(domains[i].includes(".info")){
            result.push("Technology");
        }
    }
    console.log(result);
}
domainCheck();
*/
function Domain(domains){
let result=[];
for(let i=0;i<domains.length;i++){
    let domain=domains[i];
    let ext="";
    for(j=domain.length-1;j>=0;j--){
        if(domain[j]==="."){
            break;
        }
        ext=ext;+domain[j]
        if(ext==="com"){
            result.push("bussiness");
        }
        else if(ext==="org"){
            result.push("company");
        }
        else if(ext==="net"){
            result.push("calling service");
        }
        else if(ext==="info"){
            result.push("technology")
        }
    }
}
return result;
}
console.log(Domain(["en.wikipedia.org","onlinesbi.com","happy.net","code.info"]))