class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairMap = {
            ")":"(",
            "}":"{",
            "]":"[",           
        }

        const stack = [];
        for(let l of s){
           if(l === "(" || l === "{" || l === "["){
            stack.push(l);
           }else if(pairMap.hasOwnProperty(l)){
             if(stack[stack.length - 1] === pairMap[l]){
                stack.pop();
             }else{
                return false;
             }
           }
        }

       return stack.length === 0 ? true : false;
    }
}
