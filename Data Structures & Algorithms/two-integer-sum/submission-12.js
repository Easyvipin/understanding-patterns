class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const indexMap = new Map();
    
      for(let i = 0 ; i < nums.length ; i++){
         let diff = target - nums[i];
         if(indexMap.has(diff)){
            return[i,indexMap.get(diff)]
         }else{
            indexMap.set(nums[i],i);
         }
      }
    }
}
