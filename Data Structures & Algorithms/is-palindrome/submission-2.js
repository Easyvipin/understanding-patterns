class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const t = s.split(" ").join("").toLowerCase();
        let left = 0;
        let right = t.length - 1;
        let RegEx = /^[a-z0-9]+$/i;
        console.log(t);
        while (left < right){
            if(!RegEx.test(t[left])){
                left++;
                continue;
            }

             if(!RegEx.test(t[right])){
                right--;
                continue;
            }

            if(t[left] === t[right]){
                left++;
                right--;
            }else{
                return false;
            }
        }

        return true
    }
}
