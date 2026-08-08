class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        
        for(let i = 0 ; i < tokens.length ; i++){
            let first;
            let second;
            switch(tokens[i]){
                case "+" :
                    stack.push(stack.pop() + stack.pop());
                    console.log(stack);
                    break;   
                case "*" :
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "-":
                    first = stack.pop()
                    second = stack.pop()
                    stack.push(second - first);
                    break;
                case "/":
                    first = stack.pop()
                    second = stack.pop()    
                    stack.push(Math.trunc(second / first))
                    break;
                default:
                    stack.push(parseInt(tokens[i]));    
            }
            
        }
        return stack[0];
    }
}
