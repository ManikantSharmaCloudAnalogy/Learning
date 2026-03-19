function dayTime(){
    const  dayTime=new Date();
   let day= dayTime.getDay();
   let dayName=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
   let hours=dayTime.getHours();
   let minute=dayTime.getMinutes();
   let second=dayTime.getSeconds();
   let ampm='';
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
