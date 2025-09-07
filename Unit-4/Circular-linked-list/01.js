class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 1. Traverse (loop once around)
  traverse() {
    let result = [];
    if (!this.head) return result;

    let current = this.head;
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head); // stop when full circle
    return result;
  }

  // 2. Insert at End
  insertAtEnd(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head; // circular
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // connect back
    }
  }

  // 3. Insert at Beginning
  insertAtBeginning(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // reconnect circularity
    }
  }

  // 4. Delete a value
  delete(value) {
    if (!this.head) return;

    let current = this.head;
    let prev = this.tail;

    do {
      if (current.value === value) {
        if (current === this.head) {
          this.head = this.head.next;
          this.tail.next = this.head;
        } else if (current === this.tail) {
          this.tail = prev;
          this.tail.next = this.head;
        } else {
          prev.next = current.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }
}

// 🎬 Demo
let ride = new CircularLinkedList();
ride.insertAtEnd("Horse1");
ride.insertAtEnd("Horse2");
ride.insertAtEnd("Horse3");

console.log("Circular Ride:", ride.traverse()); 

ride.delete("Horse2");
console.log("After Deletion:", ride.traverse()); 
