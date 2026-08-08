class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a, b) => a - b);;
        console.log(sortedNums);
        let result =[]
         
         for(let i = 0 ; i < sortedNums.length ; i++){
            let a = sortedNums[i];

            if(i > 0 && a == sortedNums[i - 1]){
                continue;
            }
            let left = i + 1 , right = sortedNums.length - 1;
            
            while(left < right){
                let threeSum = a + sortedNums[left] + sortedNums[right];
                if(threeSum > 0){
                    right--;
                }else if (threeSum < 0) {
                    left++;
                }else{
                   result.push([a,sortedNums[left],sortedNums[right]])
                   left++;
                   while(sortedNums[left - 1] == sortedNums[left] && left < right){
                    left++;
                   }
                }
            }
         }
         return result;      
    }
}

