class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let sMap = {
         "(":")",
         "{":"}",
         "[":"]",
       }

       let stack = [];

       for(let bracket of s){
         if(sMap.hasOwnProperty(bracket)){
            stack.push(bracket);
         }else{
             let lastElem = stack.pop();
             if(sMap[lastElem] !== bracket){
               return false
             }
         }
       }
      
      return stack.length == 0 ? true : false;
    }
}
