class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let middle = left + Math.round((right - left) / 2);
    if(arr[middle] === value) {
       return middle
    }
    if(arr[middle] > value){
       right = middle - 1;
    }else{
      left = middle + 1;
    }
    }
    return -1;
    }
}
