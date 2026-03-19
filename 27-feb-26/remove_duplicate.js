function remove(nums){
    if(nums.length===0){
        return 0;
    }
let j=1;
for(let i=0;i<nums.length-1;i++){
    if(nums[i]!==nums[i+1]){
        nums[j]=nums[i+1];
        j++;
    }
}
console.log(nums.slice(0,j))
}
console.log(remove([0,0,1,2,2,3,4,5]));