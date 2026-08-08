class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a,b) => a - b)
        console.log(sortedNums)
        let res = []


        for(let i = 0 ; i < sortedNums.length ; i++){
            let a = sortedNums[i];
            
            if( i > 0  && a === sortedNums[i - 1]){
                continue;
            }

            let left = i + 1; 
            let right = sortedNums.length - 1;

            while(left < right) {
                let threeSum = a + sortedNums[left] + sortedNums[right]

                if(threeSum < 0){
                    left++;
                }else if (threeSum > 0){
                    right--;
                }else {
                    res.push([a,sortedNums[left],sortedNums[right]])
                    left++;
                    while(sortedNums[left] === sortedNums[left - 1] && left < right){
                        left++;
                    }
                }
            }
        }
        return res;
    }
}

