class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set();

        for(let i of nums){
            if(!numSet.has(i)){
                numSet.add(i)
            }else{
                return true;
            }
        }

        return false;
    }
}
