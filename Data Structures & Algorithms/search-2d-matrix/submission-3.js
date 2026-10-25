class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let l = 0;
        let r = matrix.length - 1;

        while(l <= r){
          let mid = l + Math.floor((r - l)/ 2);
          let midArray = matrix[mid];

          if(midArray[0] <= target && midArray[midArray.length - 1] >= target){
                 let left = 0;
                 let right = midArray.length - 1;

                 while(left <= right){
                    let midElem = left + Math.floor((right - left) / 2);
                    if(midArray[midElem] === target){
                      return true;
                    }
                    if(midArray[midElem] < target){
                      left = midElem + 1;
                    }else{
                      right = midElem - 1;
                    }
                 }
                                     return false;
          }else if(midArray[midArray.length - 1] < target){
              l = mid + 1;
          }else{
            r = mid - 1;
          }
        }
        return false; 
    }  

}
