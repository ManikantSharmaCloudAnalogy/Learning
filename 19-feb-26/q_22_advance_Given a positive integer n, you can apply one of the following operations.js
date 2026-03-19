/*
"Given a positive integer n, you can apply one of the following operations:
 If n is even, replace n with n / 2.
If n is odd, replace n with either n + 1 or n - 1.
Return the minimum number of operations needed for n to become 1.
Example 1:  Input: n = 8
                    Output: 3
Explanation: 8 -> 4 -> 2 -> 1

Example 2:  Input: n = 7
                    Output: 4
Explanation: 7 -> 8 -> 4 -> 2 -> 1 or 7 -> 6 -> 3 -> 2 -> 1        "


*/


/*
function test(n){
    let count=0;
    while(n!==1){
    if(n%2==0){
        n=n/2;
    }
    else{
        n=n-1;//YOU CAN ALSO DO n=n-1;
    }
    count++;
}
return count;
}

console.log(test(7));

*/
function test(n){
    let minuscount = 0;
    let pluscount = 0;
    let n1 = n;
    while(n1 !== 1){
        if(n1 % 2 == 0){
            n1 = n1 / 2;
        } else {
            n1 = n1 - 1;
        }
        minuscount++;
    }
    let n2 = n;
    while(n2 !== 1){
        if(n2 % 2 == 0){
            n2 = n2 / 2; 
        } else {
            n2 = n2 + 1; 
        }
        pluscount++;
    }

    return Math.min(minuscount, pluscount);
}

console.log(test(7)); 