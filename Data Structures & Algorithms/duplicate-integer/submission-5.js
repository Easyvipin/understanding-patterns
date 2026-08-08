class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqSet = new Set();
        
        for (let num of nums){
            console.log(num);
            if(!freqSet.has(num)){
               freqSet.add(num);
            }else{
                return true;
            }
        }
       return false;
    }
}
