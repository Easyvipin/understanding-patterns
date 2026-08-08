class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charMap = new Map()
        let r = 0;
        let l = 0;
        let maxLength = 0;

        while(r < s.length){
            if(!charMap.has(s[r])){
                charMap.set(s[r],1);
                maxLength = Math.max(maxLength, r - l + 1)
                r++;
            }else{
                charMap.delete(s[l]);
                l++;
            }            
        }

        return maxLength;
    }
}
