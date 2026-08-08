class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();

        for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(numMap.has(diff)){
            const j = numMap.get(diff);
            return [i,j]
        }    
        if(!numMap.has(nums[i])){
            console.log('n', nums[i]);
            numMap.set(nums[i],i);
        }
        }
    }
}
