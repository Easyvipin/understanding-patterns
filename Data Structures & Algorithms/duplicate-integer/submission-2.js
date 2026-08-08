class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let charSet = new Set();
        for(let num of nums){
           if(!charSet.has(num)){
              charSet.add(num)
           }else{
            return true;
           }
        }
        return false;
    }
}
