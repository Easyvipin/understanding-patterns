class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const anagramMap = new Map(); 
       for(let word of strs){
          let arr = Array(26).fill(0);
          for(let char of word.toLowerCase()){
             const index = char.charCodeAt(0) - "a".charCodeAt(0);
             arr[index] += 1
          }
          const key = arr.join("#");

          if(anagramMap.has(key)){
            const prevValue = anagramMap.get(key);
            anagramMap.set(key,[...prevValue,word])
          }else{
            anagramMap.set(key,[word])
          }

       }
      return [...anagramMap.values()]
    }
}
