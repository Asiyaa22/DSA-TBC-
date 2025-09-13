class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.tail = null; // keep only tail pointer
    }

    // Insert new node with data after "element"
    insert(data, element = null) {
        let newNode = new Node(data);

        // Case 1: Empty list
        if (!this.tail) {
            this.tail = newNode;
            this.tail.next = newNode; // self loop
            return;
        }

        // Case 2: If element is not given → insert after tail
        if (element === null) {
            newNode.next = this.tail.next; // new node points to head
            this.tail.next = newNode;      // tail points to new node
            this.tail = newNode;           // update tail
            return;
        }

        // Case 3: Insert after a given element
        let current = this.tail.next; // start from head
        do {
            if (current.data === element) {
                newNode.next = current.next; // link new node to next
                current.next = newNode;      // link current to new node

                // if element was tail, update tail
                if (current === this.tail) {
                    this.tail = newNode;
                }
                return;
            }
            current = current.next;
        } while (current !== this.tail.next);

        console.log(`Element ${element} not found`);
    }

    // Print the list
    printList() {
        if (!this.tail) {
            console.log("List is empty");
            return;
        }

        let head = this.tail.next;
        let temp = head;
        let result = "";

        do {
            result += temp.data + " -> ";
            temp = temp.next;
        } while (temp !== head);

        console.log(result + "(back to head)");
    }
}

// Example usage
let cll = new CircularLinkedList();
cll.insert(10);             // empty → first node
cll.insert(20);             // insert after tail
cll.insert(30);             // insert after tail
cll.insert(25, 20);         // insert after element 20
cll.insert(40, 30);         // insert after element 30
cll.printList();
// Output: 10 -> 20 -> 25 -> 30 -> 40 -> (back to head)
