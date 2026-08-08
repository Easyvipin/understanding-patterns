class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       if(t.length > s.length){
            return ""
        }
        let count = {}
        let window = {}
        let have = 0;
        let minLength = Infinity;
        let start = 0;
        let end = 0;
        
        for(let i = 0 ; i < t.length ; i++){
            count[t[i]] = (count[t[i]] || 0) + 1;
        }

        let need = Object.keys(count).length
        let l = 0;
        for(let r = 0 ; r < s.length ; r++){
            let char = s[r]
            window[char] = (window[char] || 0) + 1
            
            if(char in count && window[char] === count[char]){
                have++;
            }

           while(have === need){
              if(r - l + 1 < minLength){
                  start = l;
                  end = r;
                  minLength = r - l + 1
              }
              window[s[l]] -= 1;
              if(s[l] in count && window[s[l]] < count[s[l]]){
                have--;
              }
              l++;
           }
        }
        return minLength !== parseFloat(Infinity) ? s.slice(start,end + 1) : ""
    }
}
