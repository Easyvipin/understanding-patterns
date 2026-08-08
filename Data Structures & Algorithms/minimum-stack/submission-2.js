class MinStack {
    constructor() {
        this.arr = [];
        this.minElem = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        if(val < this.minElem) {
            this.minElem = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let removedElem = this.arr.pop();
        if(removedElem === this.minElem){
            this.minElem = Infinity;
            this.arr.forEach((elem) => {
                this.minElem = Math.min(elem , this.minElem)
            })
        }
        if (this.arr.length === 0) {

                this.minElem = Infinity;

            }
    }   

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
         return this.minElem;
    }
}
