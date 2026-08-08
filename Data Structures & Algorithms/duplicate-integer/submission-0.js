class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setArry = new Map();
        for(let item of nums){
            if(!setArry.has(item)){
               setArry.set(item , 1);
            }else{
                return true
            }
        }
        return false;
    }
}
