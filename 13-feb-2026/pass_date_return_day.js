/*Create a method, pass the date and return the day in this format:
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
If date is 16 jan 2019 the ouput will be WE.
Ex:-
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU" */



function hlo(){
date=new Date();
day=date.getDay();
let days=["SU","MO","TU","WE","TH","FR","SA"];
console.log(days[day]);
}
hlo();