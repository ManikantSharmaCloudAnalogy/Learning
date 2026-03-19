function permutation(nums){
let result=[];
function getPermute(nums,index){
if(index===nums.length){
   return result.push([...nums])
}
for(let i=index;i<nums.length;i++){
    [nums[index],nums[i]]=[nums[i],nums[index]];
    getPermute(nums,index+1);
    [nums[index],nums[i]]=[nums[i],nums[index]];
}
}
getPermute(nums,0)
return result;
}
console.log(permutation([1,2,3]))