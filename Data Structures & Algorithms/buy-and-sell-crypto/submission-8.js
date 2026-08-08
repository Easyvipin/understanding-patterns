class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let start = prices[0];
        let maxProfit = 0;
        let l = 0;

        while(l < prices.length){
            start = Math.min(prices[l],start);
            maxProfit = Math.max(maxProfit,prices[l]- start);
            l++;
        }

        return maxProfit;
    } 
}
