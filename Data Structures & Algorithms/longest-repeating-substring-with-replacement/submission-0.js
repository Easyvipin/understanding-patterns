class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
     let maxLen = 0;
     let maxFreq = 0;
    let charCount = {}
    let l = 0 ;
    let r = 0;

    while(r < s.length){
        charCount[s[r]] = (charCount[s[r]] || 0 ) + 1;
        maxFreq = Math.max(maxFreq,charCount[s[r]]);
        while((r - l + 1) - maxFreq > k){
            charCount[s[l]] -= 1;
            l++;
        }
       maxLen = Math.max(maxLen , r - l + 1)
       r++; 
    }
     return maxLen;  
    }

}
