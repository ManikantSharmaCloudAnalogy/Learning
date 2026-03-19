/*
A print company wants a method to calculate last number prints by printer if you pass 
the current number and number of digit for print.
Ex:-
For currentPage = 1,numberOfDigits = 5,the output will be 5.
The following numbers will be printed : 1,2,3,4,5
*/


//ques says - given string page number and total digit available, find the last page number that can be printed without exceeding limit 
function lastPrint(currPage,noOfDigit){
let usedDigit=0;
for(let i=currPage;usedDigit<=noOfDigit;i++){
  usedDigit=usedDigit+i.toString().length;  
  if(usedDigit>noOfDigit){
    console.log(i-1);
    break;
}

}


}
lastPrint(8,5);
