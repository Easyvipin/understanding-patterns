class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) { 

        //   [1,2,4,6]

        // pre = 1

        // [1,1] , pre = 2

        // [1,1,2] pre = 8

        // [1,1,2,8] pre = 1

        // [1,1,2,8] pre = 1

        // post = 24;
        

       let pre = 1;
       let post = 1;
       let output = [];
      // [1,2,4,6]
       nums.forEach((num,index)=>{
          output[index] = pre;
          pre = num * pre;         
       })
      
       for(let i = nums.length - 1; i >= 0 ; i--){
          output[i] = post * output[i];
          post = nums[i] * post;
       }
       
       return output;
    }
}


