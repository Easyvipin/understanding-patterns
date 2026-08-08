class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
     maxProfit(prices) {
   
       let r = 0;
        let minValue = prices[0];
        let maxProfit = 0;

        while(r < prices.length){
            minValue = Math.min(minValue,prices[r]);
            maxProfit = Math.max(maxProfit , prices[r] - minValue)
            r++;
        }
        return maxProfit;
}
}