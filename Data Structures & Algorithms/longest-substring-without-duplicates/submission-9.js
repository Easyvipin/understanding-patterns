class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
      let charMap = new Map();
  let l = 0;
  let maxLength = 0;
  let r = 0;

  while(r < str.length){
    if(!charMap.has(str[r])){
      charMap.set(str[r] , 1);
      maxLength = Math.max(maxLength , r - l + 1);
      r++;
    }else{
      while(charMap.has(str[r])){
        charMap.delete(str[l]);
        l++;
      }
    }
  }
  return maxLength;
}
}
