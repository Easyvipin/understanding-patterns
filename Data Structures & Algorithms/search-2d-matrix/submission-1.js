class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let left = 0;
        let right = matrix.length - 1;
        let rowIndex = -1;
        while(left <= right){
            let middle = left + Math.floor((right - left) / 2);
            
            let middleArr = matrix[middle];
            if(middleArr[0] === target){
                return true;
            }
            if(middleArr[0] > target){
                 right = middle - 1;
            }else if(middleArr[middleArr.length - 1] < target){
                 left = middle + 1;
            }else{
                rowIndex = middle;
                break;
            }
            
        }
        if (rowIndex === -1) return false;
        
        let leftPos = 0;
        let contMatrix = matrix[rowIndex];
        let rightPos = contMatrix.length - 1;
        while(leftPos <= rightPos){
            let middle = leftPos + Math.floor((rightPos - leftPos) / 2);
            if(contMatrix[middle] === target){
                return true;
            }
            if(target < contMatrix[middle]){
                rightPos = middle - 1;              
            }else {
                leftPos = middle + 1;  
            }
        }
        
        return false;
    }  

}
