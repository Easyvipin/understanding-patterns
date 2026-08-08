class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
      let maxNo = -Infinity;
      let maxPosition = 0;
      let l = 0;
      let r = k;

      let result = [];

      for(let i = 0 ; i < k ; i++){
        if(maxNo < nums[i]){
            maxNo = nums[i];
            maxPosition = i;
        }
      } 
      
      result.push(maxNo);

      while(r < nums.length){
          if(maxNo > nums[r] && maxPosition < l + 1){
            maxNo = -Infinity;
            for(let j = l + 1 ; j <= r ; j++ ){
                if(maxNo < nums[j]){
                    maxNo = nums[j];
                    maxPosition = j;
                }
            }
          }else if(nums[r] > maxNo){
              maxNo = nums[r];
              maxPosition = r;
          }
          result.push(maxNo); 
          l++;
          r++;
      }
     return result;
    }
}
