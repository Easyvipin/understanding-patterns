class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(str, k) {
let maxLength = 0;
  let maxFreq = 0;
  let maxChar;
  let charMap = new Map();
  let l = 0;

  for(let r = 0 ; r < str.length ; r++){
    charMap.set(str[r] , (charMap.get(str[r]) || 0 ) + 1);
    maxFreq = Math.max(maxFreq,charMap.get(str[r]))
    if(charMap.get(str[r]) > maxFreq){
       maxChar = str[r];
    }
    while((r - l + 1 - maxFreq) > k ){
      charMap.set(str[l] ,charMap.get(str[l]) - 1);
      if(str[l] === maxChar){
        maxFreq -= 1;
      }
      l++;
    }
    maxLength = Math.max(maxLength , r - l + 1);
  }
 return maxLength;
}
}
