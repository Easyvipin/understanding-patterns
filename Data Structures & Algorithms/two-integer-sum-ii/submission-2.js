class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 1;
        let right = numbers.length;
        while(left < right){
            let sum = numbers[left - 1] + numbers[right - 1];
            if(sum > target){
              right--;
            }else if (sum === target){
                return [left,right]
            }else{
                left++;
            }
        }

        return [];
    }
}
