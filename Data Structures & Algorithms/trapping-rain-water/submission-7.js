class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(nums) {
   let result = 0;
   let l =0;
   let r = nums.length - 1;
   let maxLeft = nums[0];
   let maxRight = nums[r];
  

  while(l <= r){
    if(maxLeft < maxRight){
      result += Math.max(0,maxLeft - nums[l]);
      maxLeft = Math.max(maxLeft,nums[l]);
      l++;
    }else{
      result += Math.max(0,maxRight-nums[r]);
      maxRight = Math.max(maxRight,nums[r]);
      r--;
    }
  }
  return result;
    }
    
}

// min(maxL , maxR) - height[i]
