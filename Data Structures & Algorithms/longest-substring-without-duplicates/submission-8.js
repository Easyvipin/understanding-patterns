class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
      let l = 0;
  let charMap = new Map();
  let maxLength = 0;

  for(let r = 0 ; r < str.length ; r++){
      while(l < r && charMap.has(str[r])){
           charMap.delete(str[l])
           l++;
      }
      charMap.set(str[r] ,  (charMap.get(str[r]) || 0) + 1)
      maxLength = Math.max(maxLength , r - l + 1);
  }

  return maxLength;
    }
}
