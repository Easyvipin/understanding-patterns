class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = Array(temperatures.length).fill(0);
        const stack = [];

        for(let i = 0 ; i < temperatures.length ; i++){
                while(temperatures[stack[stack.length - 1]] < temperatures[i]){
                    let elemIndex = stack[stack.length - 1];
                    result[elemIndex] = i - elemIndex
                    console.log(i , stack[stack.length - 1] ,temperatures[stack[stack.length - 1]],temperatures[i] )
                    stack.pop();
                }
                stack.push(i);                         
        }

        console.log(stack);

        return result;
    }
}
