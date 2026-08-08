class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
       let minPrice = prices[0];
       let maxProfit = 0;
       let right = 0;

       while(right < prices.length){
           minPrice = Math.min(minPrice,prices[right]);
           maxProfit = Math.max(maxProfit , prices[right] - minPrice);
          right++
       }
       return maxProfit
    }
}
