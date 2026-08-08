class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let res = 0;
       let l = 0;
       let maxF = 0;
       const count = new Map()

        for(let r = 0; r < s.length ; r++ ){
          if(count.has(s[r])){
             let value = count.get(s[r]);
             count.set(s[r] , value + 1);
          }else{
            count.set(s[r], 1);
          }
          maxF = Math.max(maxF, count.get(s[r]))

          while((r - l + 1) - maxF > k){
             let prevValue = count.get(s[l]);
             count.set(s[l] , prevValue - 1);
             l++;
          }
          res = Math.max(res , r - l + 1);
       }
       return res;
    }
}
