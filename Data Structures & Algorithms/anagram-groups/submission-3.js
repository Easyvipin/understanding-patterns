class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const anagramWords = new Map();
       for(let char of strs){
        let arr = new Array(26).fill(0);
          for(let word of char){
            let index = word.charCodeAt(0) - "a".charCodeAt(0);
            arr[index] += 1;
          }
         let key = arr.join("#");
         if(anagramWords.has(key)){
            let prevValue = anagramWords.get(key);
            anagramWords.set(key,[...prevValue,char])
         }else{
            anagramWords.set(key,[char]);
         }
       }
       return [...anagramWords.values()]
    }
}
