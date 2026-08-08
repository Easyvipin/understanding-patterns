class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       const inputStack = []
       let result = 0;
       for(let operand of tokens){
         if(operand == "+"){
            const b = Number(inputStack.pop());
            const a = Number(inputStack.pop());
            result = a + b;
            inputStack.push(result)
         }
         else if(operand == "-"){
            const b = Number(inputStack.pop());
            const a = Number(inputStack.pop());
            result = a - b;
            inputStack.push(result)
         }
         else if(operand == "*"){
            const b = Number(inputStack.pop());
            const a = Number(inputStack.pop());
            result = a * b;
            inputStack.push(result)
         }
         else if(operand == "/"){
            const b = Number(inputStack.pop());
            const a = Number(inputStack.pop());
            result = Math.trunc(a / b);
            inputStack.push(result)
         }else{
            inputStack.push(operand)
         }

       }

       return inputStack.pop();
    }
}
