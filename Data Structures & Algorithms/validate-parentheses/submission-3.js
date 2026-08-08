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
            if(char == "]" || char == "}" || char == ")"){
                if(stack[stack.length - 1] == charMap[char]){
                 stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(char)
            }         
        }
       return stack.length === 0;
    }
}
