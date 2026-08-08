class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let right = 0;
        let left = 0;
        let charMap = new Map();
        let maxLength = 0;

        while(right < s.length) {
            if(!charMap.has(s[right])){
                charMap.set(s[right],0);
                maxLength = Math.max(maxLength , right - left + 1)
                right++;
            }else{
                charMap.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}
