class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let charMap = {
            "]" :"[",
            "}":"{",
            ")":"("
        }
        for(let i = 0 ; i < s.length ; i++){
            let char = s[i]
            if(charMap[char]){
                if(stack[stack.length - 1] == charMap[char]){
                 stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(char)
            }         
        }
        if(stack.length === 0){
            return true;
        }else{
            return false;
        }
    }
}
