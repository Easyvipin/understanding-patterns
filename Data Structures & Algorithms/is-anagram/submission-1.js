class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        
        const sMap = {}
        const tMap = {}
         

        for(let char of s){
            if(sMap[char]){
                sMap[char] += 1;
            }else{
                sMap[char] = 1;
            }
        }

        for(let char of t){
            if(tMap[char]){
                tMap[char] += 1;
            }else{
                tMap[char] = 1;
            }
        }

        for(let word in sMap){
            if(tMap[word] !== sMap[word]){
                return false
            }
        }

        return true;
    }
}
