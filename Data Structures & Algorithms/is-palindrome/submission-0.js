class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {   
     
     let str = s.split(" ").join("").toLowerCase();
     console.log(str)
     let left = 0;
     let right = str.length - 1;
     
     while(left <= right){
        let leftAscii = str[left].charCodeAt(0);
        let rightAscii = str[right].charCodeAt(0);
        console.log(str[left] , str[right]);
        if(!((leftAscii >=48 && leftAscii <= 57) || (leftAscii >=65 && leftAscii <= 90) || (leftAscii >=97 && leftAscii <= 122))){
           left++;
           continue;

        }else if(!((rightAscii >=48 && rightAscii <= 57) || (rightAscii >=65 && rightAscii <= 90) || (rightAscii >=97 && rightAscii <= 122))){
            right--; 
            continue;
        } 
        else if(str[left] !== str[right]){
            return false;
        }
        right--;
        left++
     }
     return true;
    }
}
