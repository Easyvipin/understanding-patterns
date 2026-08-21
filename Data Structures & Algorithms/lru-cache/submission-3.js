class Node {
    constructor(key,value){
      this.value = value
      this.key = key
      this.prev = null;
      this.next = null;  
    }
}

class LRUCache {
   constructor(capacity){
         this.capacity = capacity;
         this.head = new Node(0,0);
         this.tail = new Node(0,0);
         this.head.next = this.tail;
         this.tail.prev = this.head;
         this.mapKey = new Map();
   }

   remove(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
   }

   insert(node){
    let first = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    first.prev = node
    node.next = first;
   }

   get(key){
      if(!this.mapKey.has(key)) return -1;
      let node = this.mapKey.get(key);
      this.remove(node)
      this.insert(node)
      return node.value;
   }

   put(key,value){
     if(this.mapKey.has(key)){
        let node = this.mapKey.get(key);
        node.value = value;
        this.remove(node);
        this.insert(node);
     }else{
        let node = new Node(key , value);
        this.mapKey.set(key,node);
        this.insert(node);
     }

     if(this.capacity < this.mapKey.size){
        let lru = this.tail.prev;
        this.remove(lru);
        this.mapKey.delete(lru.key)
     }
   }

}
