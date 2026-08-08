class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while(left < right){
            if(heights[left] < heights[right]){
            maxArea = Math.max(maxArea, heights[left] * (right - left))
            left++;
            }else{
             maxArea = Math.max(maxArea, heights[right] * (right - left))
             right--; 
            }
        }
       return maxArea; 
    }
}
