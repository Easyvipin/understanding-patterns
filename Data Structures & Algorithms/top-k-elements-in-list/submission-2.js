class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq={}
        let result = [];
        for(let i of nums){
             if(freq[i]){
                freq[i]+=1
             } else{
                freq[i] = 1;
             }
        }

        let freqArry = []
        for(let j in freq){
            if(!freqArry[freq[j]]){
               freqArry[freq[j]] = []
            }
            freqArry[freq[j]].push(parseInt(j))
        }
        for(let i = freqArry.length - 1 ; i >= 0 && result.length < k ; i--){
              if(freqArry[i]){
                result.push(...freqArry[i]);
              }
        }

        return result;
    }
}
