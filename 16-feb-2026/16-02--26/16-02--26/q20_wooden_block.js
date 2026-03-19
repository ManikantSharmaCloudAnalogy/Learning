/*
Ravi got wooden block of different sizes as a present from cloud analogy for his anniversary,each wooden block having an non negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to large so that each wooden block will be bigger than the previous one exactly by 1.He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.

"Ex:- 
For wooden block = [5, 6, 10, 12], the output should be 4
For wooden block = [6,2,3,8], the output should be 3"

*/
function wooden(){
let block=[6,2,3,8];
let count=0;
for(let i=0;i<block.length-1;i++){
    for(let j=0;j<block.length-i-1;j++)
    { if(block[j]>block[j+1]){
   let temp=block[j];
    block[j]=block[j+1];
    block[j+1]=temp;
   }}
}
//console.log(block);
for(let i=0;i<block.length-1;i++){
let gap=block[i+1]-block[i];
if(gap>1){
    count=count+gap-1;
}
}
console.log(count);
}
wooden();