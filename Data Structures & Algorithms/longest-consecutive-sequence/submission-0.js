class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(!numsSet.has(num-1)){
               let length = 0;

               while(numsSet.has(num + length)){
                length += 1;
               }
            longest = Math.max(length,longest)   
            }
        }
        return longest
    }
}
