/*
Little Artem got n stones on his birthday and now wants to give some of them to Masha. 
He knows that Masha cares more about the fact of receiving the present, rather than the value of that present, 
so he wants to give her stones as many times as possible. However, Masha remembers the last present she received, 
so Artem can't give her the same number of stones twice in a row. 
For example, he can give her 3 stones, then 1 stone, then again 3 stones, 
but he can't give her 3 stones and then again 3 stones right after that.
 How many times can Artem give presents to Masha?
Input Format
 You will be given a function which contains a single integer n, number of stones Artem received on his birthday.
 Output Format
 Return the maximum possible number of times Artem can give presents to Masha.
 Sample TestCase 1
 Input 
1
Output
1
*/
function test(n){//n is stones 
count=0   //number of stone count;
let lastPresent=0;
while(n>0){
    if(lastPresent!==1){
        n=n-1;//give one stone
        lastPresent=1;
        count++;
    }
    else if(n>=2){
        n=n-2;//give two stone
        lastPresent=2;
        count++;
    }
    else{
        break;
    }

}
return count;
}

console.log(test(7));





