class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let left = 0; 
       let right = 0;
       let freqMap = new Map();
       let maxLength = 0;

       while(left <= right && right < s.length){
          if(!freqMap.has(s[right])){
            freqMap.set(s[right] , 1);
            maxLength = Math.max(maxLength  , right - left + 1)
            right++;
          }else{
            freqMap.delete(s[left]);
            left++;
          }
       }
      
      return maxLength;
    }
}
