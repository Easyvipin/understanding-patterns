class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a,b)=>a-b);
        let result = [];
        for(let i = 0 ; i < sortedNums.length - 1 ; i++){
            let a = sortedNums[i];

            if(i > 0 && sortedNums[i - 1] === a){
                continue;
            }

            let left = i + 1;
            let right = sortedNums.length - 1;

            while(left < right){
                let target = a + sortedNums[left] + sortedNums[right];

                if(target < 0){
                   left++;
                }else if(target > 0){
                    right--;
                }else{
                    result.push([a,sortedNums[left],sortedNums[right]]);
                    left++;
                    while(left < right && sortedNums[left] === sortedNums[left - 1]){
                        left++;
                    }
                }

            }
        }
        return result;
    }
}
