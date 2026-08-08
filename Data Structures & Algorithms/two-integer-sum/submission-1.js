class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let numMap = new Map();
        for(let i = 0; i < nums.length ; i++){
            let diff = target - nums[i];
            if(numMap.has(diff)){
                 let value = numMap.get(diff);
                 return [value,i]
            }else{
                numMap.set(nums[i],i);
            }  
         }
       return numMap;
    }
}
