class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    // Delete Head (your style)
    // deleteHead() {
    //     if (!this.head) return;

    //     let current = this.head;
    //     if (this.head === this.tail) {
    //         // Only one node
    //         this.head = this.tail = null;
    //     } else {
    //         this.head = current.next;
    //         this.head.prev = null;
    //         current.next = null; // break link
    //     }
    // }

    deleteHead(){
      if(!this.head) return
      let current = this.head
      if(this.head === this.tail){
        this.head = this.tail = null;
      }else{
        current.next.prev = null; //creating a new link pointing to null
        this.head = current.next;
        current.next = null; //breaking the link
      }
    }

    // Delete Tail
    deleteTail() {
        if (!this.tail) return;

        let temp = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null; // break link
        }
    }

    // Delete at any position (1-based index)
    deleteAtPosition(pos) {
        if (pos <= 0 || !this.head) return;

        let current = this.head;
        let count = 1;

        while (current && count < pos) {
            current = current.next;
            count++;
        }

        if (!current) return; // out of range

        if (current === this.head) {
            this.deleteHead();
        } else if (current === this.tail) {
            this.deleteTail();
        } else {
            let temp = current.prev;
            temp.next = current.next;
            current.next.prev = temp;

            // break current’s links
            current.next = null;
            current.prev = null;
        }
    }

    printList() {
        let temp = this.head;
        let result = "";
        while (temp) {
            result += temp.data + " <-> ";
            temp = temp.next;
        }
        console.log(result + "NULL");
    }
}

// Demo
let dll = new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.insertAtEnd(40);

dll.printList();  // 10 <-> 20 <-> 30 <-> 40 <-> NULL

dll.deleteHead();
dll.printList();  // 20 <-> 30 <-> 40 <-> NULL

dll.deleteTail();
dll.printList();  // 20 <-> 30 <-> NULL

dll.deleteAtPosition(2);
dll.printList();  // 20 <-> NULL
