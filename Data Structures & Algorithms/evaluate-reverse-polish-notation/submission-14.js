class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       const tokenStack = []

      for(let token of tokens){
        if(token === "+"){
           let result = tokenStack.pop() + tokenStack.pop();
           tokenStack.push(result);
        }else if(token === "-"){
           let a = tokenStack.pop();
           let b = tokenStack.pop();
           let result = b - a;
           tokenStack.push(result); 
        }else if(token === "*"){
          let result = tokenStack.pop() * tokenStack.pop();
           tokenStack.push(result); 
        }else if(token === "/"){
          let a = tokenStack.pop();
          let b = tokenStack.pop();
          let result = Math.trunc(b / a);
           tokenStack.push(result); 
        }else{
           tokenStack.push(Number(token))
        }
      }
      return tokenStack.pop();
    }
}
