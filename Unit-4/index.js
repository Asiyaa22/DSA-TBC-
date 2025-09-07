//code for node structure and Insertion
//Node sructure
class Node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

// let node_1 = new Node(12);
// let node_2 = new Node(10)

// console.log(node_1);
// console.log(node_2);

class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null
    }
    insertAtHead(data){
        const node_1 = new Node(data);
        node_1.next = this.head;
        this.head = node_1;
    }
    insertAtPosition(data, position){
        const newNode = new Node(data);
        
        if(position == 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;

        for(let i = 0;current !== null && i < position - 1; i++){
            current = current.next;
        }

        //if position at which we are inserting is out of range
        if (current === null) {
        console.log("Position out of range");
        return;
        }

        newNode.next = current.next;
        current.next = newNode;

        //if inserted at last
        if(newNode.next === null){
            this.tail = newNode;
        }
    }
    printList(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + '->';
            current = current.next; 
        }
        console.log(result + 'null')
    }
      // Print head and tail values
    printHeadTail() {
        console.log("Head:", this.head ? this.head.data : "null");
        console.log("Tail:", this.tail ? this.tail.data : "null");
    }
    deleteAtHead(){
        this.head = this.head.next;
    }
    deleteAtPosition(position){
        if(!this.head){
        return `Empty list`
        }
        let current = this.head;
        //starting or first node
        if(position == 0){
        this.head = current.next
        return
        }

        let prev = null;
        let index = 0;

        while(current && index < position){
            prev = current;
            current = current.next;
            index++;
        }
        if(!current){
            console.log("position out of range");
        }
        prev.next = current.next; //unlink
        //deleting the last node
        if(current == this.tail)
        this.tail = prev;
    }
}

let list = new LinkedList();

list.insertAtPosition(10, 0);  // head=10, tail=10
list.insertAtPosition(20, 1);  // head=10, tail=20
list.insertAtPosition(5, 0);   // head=5, tail=20
list.insertAtPosition(15, 2);  // head=5, tail=20
list.insertAtPosition(25, 4);  // head=5, tail=25 (insert at last position)
// list.insertAtPosition(22, 5)
list.deleteAtPosition(4);
list.deleteAtHead()
console.log("After Deleting at head");

list.printList();     // 5 -> 10 -> 15 -> 20 -> 25 -> null
list.printHeadTail(); // Head: 5, Tail: 25


