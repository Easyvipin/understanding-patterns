class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length === 0 ){
            return 0;
        }
        let l = 0;
        let r = height.length - 1;
        let total = 0;
        let leftMax = height[l];
        let rightMax = height[r]; 

        while(l < r){
            if(leftMax < rightMax){
                l += 1
                leftMax = Math.max(leftMax ,height[l]);
                total += leftMax - height[l];
            }else{
                r -= 1
                rightMax = Math.max(rightMax ,height[r]);
                total += rightMax - height[r];
            }
        }
       return total
    }
}

// min(maxL , maxR) - height[i]
