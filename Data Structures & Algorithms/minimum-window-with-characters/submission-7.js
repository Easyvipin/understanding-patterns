class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       if(t === "") return "";
       
       const window = new Map();
       const countT = new Map();
        
       let result = [-1,-1];
       let resLength = Infinity;
      
       
       for(let char of t){
        countT.set(char,(countT.get(char) || 0) + 1)
       }
       let have = 0;
       let need = countT.size
       console.log(need);
       let l = 0;

       for(let r = 0 ; r < s.length ; r++){
          if(countT.has(s[r])){
            window.set(s[r] , (window.get(s[r]) || 0) + 1);
          }
          if(countT.has(s[r]) && countT.get(s[r]) === window.get(s[r])){
            have += 1;
          }
          while(have === need){
            if(resLength > r - l + 1){
               result = [l,r];
               resLength = r - l + 1;
            }
            if(window.has(s[l])){
            window.set(s[l] , (window.get(s[l]) || 0) - 1);
            }
            if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                have--;
                }
            l += 1;
          }
       }
       return resLength !== Infinity ? s.slice(result[0] , result[1] + 1) : ""
    }
}
