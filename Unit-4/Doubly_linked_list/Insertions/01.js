// Insertions

class Node{
    constructor(data){
        this.data = data,
        this.prev = null, 
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null, 
        this.tail = null
    }
    insertAtStart(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }

    }
    // Insert at end (O(1) because we use tail)
  insertAtEnd(value) {
    let newNode = new Node(value);

    if (!this.tail) { 
      // empty list
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Print forward and backward
  print() {
    let forward = [];
    let current = this.head;
    while (current) {
      forward.push(current.data);
      current = current.next;
    }

    let backward = [];
    current = this.tail;
    while (current) {
      backward.push(current.data);
      current = current.prev;
    }

    console.log("Forward:", forward.join(" ⇄ "));
    console.log("Backward:", backward.join(" ⇄ "));
  }
}


let dll = new DoublyLinkedList();
dll.insertAtStart(10);       // 10
dll.insertAtEnd(20);        // 10 ⇄ 20
dll.insertAtEnd(30);        // 10 ⇄ 20 ⇄ 30
dll.insertAtEnd(40);  
dll.insertAtEnd(50);  
dll.insertAtEnd(60);  

dll.print();
// Forward: 10 ⇄ 20 ⇄ 25 ⇄ 30
// Backward: 30 ⇄ 25 ⇄ 20 ⇄ 10