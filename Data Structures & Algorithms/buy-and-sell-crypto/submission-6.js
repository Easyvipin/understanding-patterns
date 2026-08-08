class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
     maxProfit(prices) {
   
      let right = 0 
      let max = 0;
      let min = prices[0];

      while(right < prices.length){
         min = Math.min(min,prices[right])
         max = Math.max(max,prices[right]- min);
         right++;
      }
       
       return max;
    }
}
