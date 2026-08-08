class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let freqMap = new Map();

        // xyzzxy  // xyz // yzz // zz //z // zxy // 3 

        while(left <= right && right < s.length){
            if(!freqMap.has(s[right])){
                 freqMap.set(s[right], 1);
                 maxLength = Math.max(maxLength,freqMap.size)
                 right++;
            }else{
                freqMap.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}
