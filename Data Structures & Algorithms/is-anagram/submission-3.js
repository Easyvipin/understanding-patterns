class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = {}
        
        for(let char of s){
            if(freqS[char]){
                freqS[char] += 1;
            }else{
                freqS[char] = 1;
            }
        }

        for(let char of t){
            if(freqS[char]){
                freqS[char] -= 1;
            }else{
                return false;
            }
        }

        for (let char of Object.keys(freqS)){
            if(freqS[char] !== 0){
                return false;
            }
        }

        return true;

    }
}
