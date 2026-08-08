class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
      let result = []
      let deque = []

      for(let i = 0 ; i < nums.length ; i++){
        //removing the left elememt if its not in the range of widow size
        if(deque.length > 0 && deque[0] === i - k){
            deque.shift()
        } 

        // remove the element if they are small than the currentItem

        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]){
            deque.pop()
        }

        deque.push(i);

        // add the element to result if we reach the window size 

        if(i >= k - 1){
            result.push(nums[deque[0]])
        }
      }
      return result;
    }
}
