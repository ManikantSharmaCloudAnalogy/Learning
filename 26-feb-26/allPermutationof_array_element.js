function permute(nums){
    const ans=[];
    function getPerms(nums,idx){
        if(idx===nums.length){
            ans.push([...nums]);
        }
        for(let i=idx;i<nums.length;i++){
            [nums[idx],nums[i]]=[nums[i],nums[idx]];//swap 
            //recursive call
            getPerms(nums,idx+1);
            //backtrack;
            [nums[idx],nums[i]]=[nums[i],nums[idx]];

        }
    }
    getPerms(nums,0);
    return ans;
}

console.log(permute([1,2,3]));