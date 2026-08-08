class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = Array(nums.length).fill(1);
        let preFix = 1;
        let postFix = 1;

        for(let i = 0; i < nums.length ; i++){
            result[i] = preFix;
            preFix *= nums[i]; 
        }

        for(let j = nums.length - 1 ; j >= 0 ; j--){
            result[j] *= postFix
            postFix *= nums[j]
        }

        return result;

    }
}
