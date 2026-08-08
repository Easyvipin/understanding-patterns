class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indeces = {}
        for(let i = 0 ; i < nums.length ; i++){
            console.log(indeces[target - nums[i]])
            if(indeces.hasOwnProperty(target- nums[i])){   
                return [indeces[target - nums[i]],i]
            }else{
                indeces[nums[i]] = i
            }
        }
    }
}
