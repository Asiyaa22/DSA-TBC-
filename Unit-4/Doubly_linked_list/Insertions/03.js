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
        this.tail = null,
        this.size = 0
    }

    insertAtHead(data){
        //core logic
        // step - 1 creating a node
        // step - 2: linking the node
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode
        }else{
            // link the new node with head and finally it will be inserted in my ddl
            newNode.next = this.head; //setting the next refernce to my head node
            this.head.prev = newNode; //setting the refernce of prev pointer in my head node
            this.head = newNode //updating the head
        }
        this.size++
    }

    insertAtTail(data){
    //   create a new node
      const newNode = new Node(data);
    //   checking the list is empty
      if(!this.tail){
        // update your new node to head n tail
        this.head = this.tail = newNode;
      }else{
        // insert new node at the end
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode
      }
      this.size++;
    }
    insertAtAnyPosition(value, position){
      // handling valid position
      if (position < 1 || position > this.size + 1) {
      console.log("Invalid position!");
      return;
    }

    // Case 1: insert at beginning
    if (position === 1) {
      this.insertAtHead(value);
      return;
    }

    // Case 2: insert at end
    if (position === this.size + 1) {
      this.insertAtTail(value);
      return;
    }
    // Case 4: insert in middle
    // creating the node
    const newNode = new Node(value);

    let temp = this.head;

    // Traverse to the (position - 1)th node
    for (let i = 1; i < position - 1; i++) {
      temp = temp.next;
    }

    // Re-link
    newNode.next = temp.next; //linked my next of new node
    temp.next.prev = newNode; //linked the prev of my third node
    newNode.prev = temp;   //linked the prev of my newndoe
    temp.next = newNode;   //linked the next of my temp node to new node
    }

    print(){
    let forward = [];
    let current = this.head;
    while (current) {
      forward.push(current.data);
      current = current.next;
    }  
    console.log("Forward:", forward.join(" ⇄ "));
    }
}

let dll = new DoublyLinkedList();

dll.insertAtHead(2);
dll.insertAtHead(3);
dll.insertAtTail(6)
dll.insertAtAnyPosition(5, 2);

dll.print();

