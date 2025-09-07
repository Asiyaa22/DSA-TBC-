// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Insert at End (helper)
  insertAtEnd(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Insert at Beginning (helper)
  insertAtBeginning(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // ⭐ Insert at any position (1-based index)
  insertAtPosition(value, position) {
    if (position < 1 || position > this.size + 1) {
      console.log("Invalid position!");
      return;
    }

    // Case 1: insert at beginning
    if (position === 1) {
      this.insertAtBeginning(value);
      return;
    }

    // Case 2: insert at end
    if (position === this.size + 1) {
      this.insertAtEnd(value);
      return;
    }

    // Case 3: insert in middle
    const newNode = new Node(value);
    let current = this.head;

    // Traverse to the (position - 1)th node
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }

    // Re-link
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;

    this.size++;
  }

  // Traverse forward
  traverseForward() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// 🎬 Demo
let dll = new DoublyLinkedList();
dll.insertAtEnd("A");
dll.insertAtEnd("B");
dll.insertAtEnd("D");

console.log("Before Insertion:", dll.traverseForward());
// ["A", "B", "D"]

dll.insertAtPosition("C", 3); // insert at position 3
console.log("After Insertion:", dll.traverseForward());
// ["A", "B", "C", "D"]
