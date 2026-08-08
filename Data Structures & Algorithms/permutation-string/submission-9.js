class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
          if(s1.length > s2.length){
            return false
        }
        
        let s1Count = Array(26).fill(0);
        let s2Count = Array(26).fill(0);
        let matches = 0;

        for(let i = 0 ; i < s1.length ; i++){
            s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
            s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }

        for(let j = 0 ; j < 26 ; j++){
            if(s1Count[j] === s2Count[j]){
                matches++;
            }
        }
       
        let l = 0;
        for(let r = s1.length ; r < s2.length ; r++){
           
           if(matches === 26){
            return true;
           }

           let index = s2[r].charCodeAt(0) - "a".charCodeAt(0);
           s2Count[index] += 1;

           if(s2Count[index] === s1Count[index]){
              matches++;
           }else if (s1Count[index] + 1 === s2Count[index]){
              matches--;
           }
                 
           index = s2[l].charCodeAt(0) - "a".charCodeAt(0);
           s2Count[index] -= 1;

           if(s2Count[index] === s1Count[index]){
            matches++;
           }else if (s1Count[index] - 1 === s2Count[index]){
             matches--;
           }
           l++;   
        }
        return matches === 26;

    }
}

