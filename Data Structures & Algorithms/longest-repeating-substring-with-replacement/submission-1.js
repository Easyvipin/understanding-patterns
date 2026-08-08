class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charCount = {}
        let maxFreq = 0;
        let r = 0;
        let l = 0;
        let maxLength = 0;

        while(r < s.length){
            charCount[s[r]] = (charCount[s[r]] || 0 ) + 1;
            maxFreq = Math.max(maxFreq,charCount[s[r]]);

            while((r - l + 1) - maxFreq > k){
                charCount[s[l]] -= 1;
                l++;
            }
           
            maxLength = Math.max(maxLength,r - l + 1)
            r++;
            
        }
        return maxLength;

}
}
