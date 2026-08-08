class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums){
        let freq = new Map()
        
        for(let i of nums){
            if(!freq.has(i)){
               freq.set(i,1)
            }else{
               return true; 
            }
        }
         return false;
    }
}
