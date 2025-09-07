// Node structure
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // 1️⃣ Insert at the beginning (head)
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // Link new node to current head
    this.head = newNode;      // Make new node the head
  }

  // 2️⃣ Insert at the end (tail)
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) { // If list is empty
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next; // Move to last node
    }
    current.next = newNode;
  }

  // 3️⃣ Insert at any position (middle)
  insertAtPosition(data, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    // If inserting at head
    if (position === 0) {
      this.insertAtHead(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let index = 0;

    // Traverse until the position
    while (current && index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    if (index !== position) {
      console.log("Position out of range");
      return;
    }

    newNode.next = current; // Link new node to next node
    prev.next = newNode;    // Link previous node to new node
  }

  // Helper method to print the list
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

// --- Example usage ---
const list = new LinkedList();

list.insertAtEnd(10);        // 10
list.insertAtEnd(20);        // 10 -> 20
list.insertAtHead(5);        // 5 -> 10 -> 20
list.insertAtPosition(15, 2); // 5 -> 10 -> 15 -> 20
list.insertAtPosition(1, 0);  // 1 -> 5 -> 10 -> 15 -> 20
list.printList();
