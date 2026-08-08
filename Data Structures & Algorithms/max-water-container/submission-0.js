class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            if(heights[left] < heights[right]){
                maxArea = Math.max(heights[left] * (right- left) ,maxArea);
                left++;
            }else if(heights[left] > heights[right]){
                 maxArea = Math.max(heights[right] * (right - left) , maxArea);
                 right--;
            }else{
                maxArea = Math.max(heights[right] * (right - left) , maxArea);
                left++;
            }
        }
       return maxArea; 
    }
}
