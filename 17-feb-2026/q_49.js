/* 
Given an array  , perform the following operation untill the array contains only one number
* On the 1st, 3rd, 5th, etc iterations (1 - based) replace each pair of consecutive elements with their sum.
* On the 2nd, 4th, 6th, etc. iteration replace each pair of consecutive elements with their product. 
After the algoritham has finished
there will be a single element left in the array. return that element.
   input = [1,2,3,4,5,6,7,8] it will give result 186
*/

//approach-> even iteration pair element +
//odd iteration pair element -
//remain single element in array , return that element 

let arr=[1,2,3,4,5,6,7,8];
let iteration=1;
let result=[];
while(arr.length>1){
   result=[];
    for(let i=0;i<arr.length;i=i+2){
        if(iteration%2==1)//odd iteration
            {
result.push(arr[i]+arr[i+1]);
            }
              else{
        //even iteration
        result.push(arr[i]*arr[i+1]);
    }
    }
    arr=result;
    iteration++;
}
console.log(arr[0]);