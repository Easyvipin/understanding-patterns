class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(str, k) {
         let l = 0;
  let maxLength = 0;
  let maxFreq = 0;
  let charMap = new Map();
  let freqChar;

  for(let r = 0 ; r < str.length ; r++){
    charMap.set(str[r] , (charMap.get(str[r]) || 0) + 1)
    maxFreq = Math.max(maxFreq , charMap.get(str[r]));
    if(charMap.get((str[r])) > maxFreq){
      freqChar = str[r];
    }

    while(r - l + 1 - maxFreq > k ){
          charMap.set(str[l] , (charMap.get(str[l]) || 0) - 1);
          if(freqChar === str[l]){
             maxFreq -= 1;   
          }
           l++;
       } 
    maxLength = Math.max(maxLength , r - l + 1);
  }
  return maxLength;
}
}
