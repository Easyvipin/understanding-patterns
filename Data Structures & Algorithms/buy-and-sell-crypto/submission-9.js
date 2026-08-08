class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // [10,1,5,6,7,1]

       let maxProfit = 0;
       let minPrice = Infinity;
       let left = 0;
       let right = 1;

       while(left < right && right < prices.length){
          if(prices[left] < prices[right]){
            minPrice = Math.min(minPrice , prices[left]);
          }else {
            minPrice = Math.min(minPrice , prices[right]);
          }
          maxProfit = Math.max(maxProfit , prices[right] - minPrice)
          left++;
          right++;
       }
      return maxProfit
    }
}
