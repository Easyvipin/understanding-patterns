class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) 
    {
     let charMap = new Map();
        for(let word of strs){
            let arry = Array(26).fill(0);
            for(let char of word){
               let index = char.charCodeAt(0) - "a".charCodeAt(0);
               arry[index] += 1;
            } 
            let key = arry.join("#");
            if(charMap.has(key)){
                let prevValue = charMap.get(key)
                charMap.set(key,[...prevValue , word])
            }else{
                charMap.set(key , [word])
            }
        }
        return [...charMap.values()]
    }
}
