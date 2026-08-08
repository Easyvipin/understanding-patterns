class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
       if(s1.length > s2.length){
        return false;
       }
       let freqMap = new Map();
       
       for(let i of s1){
          freqMap.set(i , (freqMap.get(i) || 0 ) + 1);
       }
       let left = 0;

       // lecaabee
      
       for(let right = 0 ; right < s2.length ; right++){
          if(freqMap.has(s2[right])){
            freqMap.set(s2[right], freqMap.get(s2[right]) - 1)
          }

          if(right - left + 1 > s1.length){
            if(freqMap.has(s2[left])){
                 freqMap.set(s2[left] , freqMap.get(s2[left]) + 1);
            }
            left++;
          } 

          console.log(freqMap)

          if(right - left + 1 === s1.length && [...freqMap.values()].every(v => v === 0)){
             return true;
          }
         
       }
       return false;
    }
}