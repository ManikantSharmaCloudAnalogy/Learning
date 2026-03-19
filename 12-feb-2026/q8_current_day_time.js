function dayTime(){
    const  date=new Date();
   let dayName=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
   let day= date.getDay();
   let hours=date.getHours();
   let minute=date.getMinutes();
   let second=date.getSeconds();
   let ampm="";
 if(hours>=12)
   {
    ampm="pm";
   }
   else{
    ampm="am";
   }
hours=hours%12;
if(hours==0){
    hours=12
}
   console.log("today is",dayName[day]);
   console.log("Current time is :"+hours+" "+ampm+" "+":"+minute+":"+second);
}
dayTime();
