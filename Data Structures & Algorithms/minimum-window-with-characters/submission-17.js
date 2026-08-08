class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
     
     if(t === ""){
      return ""
      } 

      let window = new Map();
      let countT = new Map();

      let res = [-1,-1];
      let resultlength = Infinity;

      for(let i of t){
        countT.set(i,(countT.get(i) || 0 )  + 1)
      }
      let need = countT.size;
      let have = 0;

      let l = 0;

      for(let r = 0 ; r < s.length ; r++){
         if(countT.has(s[r])){
          window.set(s[r] , (window.get(s[r]) || 0) + 1);
         }
         if(countT.has(s[r]) && countT.get(s[r]) === window.get(s[r])){
          have += 1;
         }
         while(have === need){
          if(resultlength > r - l + 1){
             res = [r,l]
             resultlength = r - l + 1;
          }
          if(window.has(s[l])){
             window.set(s[l] , (window.get(s[l]) || 0) - 1);
          }
        if(countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {   
          have -= 1;
         }
         l++;
      }
    }

     return resultlength !== Infinity ? s.slice(res[1] , res[0] + 1) : ""
}
}
