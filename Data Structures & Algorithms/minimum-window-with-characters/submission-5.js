class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       if(t == "") return ""

       let window = {};
       let count = {};
       let res = [-1,-1];
       let minLength = Infinity;
       let have = 0;

       for(let char of t){
          count[char] = (count[char] || 0) + 1;
       }
       let need = Object.keys(count).length;
       let l = 0;
       for(let r = 0 ; r < s.length ; r++){
          let c = s[r]
          window[c] = (window[c] || 0) + 1;
          if(c in count && window[c] === count[c]){
            have++;
          }

          while(have == need){
            if((r - l + 1) < minLength){
                res[0] = l;
                res[1] = r;
                minLength = r - l + 1;
            }
            window[s[l]] -= 1;
            if(s[l] in count && window[s[l]] < count[s[l]]){
                have--;
            }
            l++;
          }
       }
       let [start,end] = res;
       console.log(start,end);
       return minLength !== parseFloat(Infinity) ? s.slice(start,end+1) : ""
    }
}
