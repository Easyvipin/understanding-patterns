class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
     if(t.length > s.length){
      return "";
     }

     let window = new Map();
     let tMap = new Map();

     for(let char of t){
        tMap.set(char , (tMap.get(char) || 0) + 1); 
     }
     
     let need = tMap.size;
     let have = 0;
     
     let l = 0;
     let res = [];
     let resultLength = Infinity;

     for(let r = 0 ; r < s.length ; r++){
       window.set(s[r] ,  (window.get(s[r]) || 0) + 1)
       if(window.get(s[r]) === tMap.get(s[r])){
          have += 1;
       }       
       while(have === need){
         if(r - l + 1 < resultLength){
            resultLength = r - l + 1;
            res = [l,r];
         }
         window.set(s[l] ,window.get(s[l]) - 1)
         if(tMap.has(s[l]) && window.get(s[l]) < tMap.get(s[l])){
             have -= 1;
         }
         l++;
       }
     }
     return resultLength !== Infinity ? s.slice(res[0] , res[1] + 1) : "";
    }
}
