class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
          this.keyStore.set(key , []);
        }
        this.keyStore.get(key).push({
                value:value,timestamp:timestamp
            })
        
    }

    get(key,timestamp){
        if(!this.keyStore.has(key)) return ""
        const values = this.keyStore.get(key);

        let l = 0;
        let r = values.length - 1;
        let result = "";

        while(l <= r){
          let mid = Math.floor((l + r) / 2)

          if(values[mid].timestamp <= timestamp){
            result = values[mid].value;
            l = mid + 1;
          }else{
            r = mid - 1;
          } 
        }
        return result;
    }
}
