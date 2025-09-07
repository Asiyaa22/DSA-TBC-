class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

// let node_1 = new Node(12); 

class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null
    }
    insertAtHead(data){
        const newNode = new Node(data);

        newNode.next = this.head; //linking my node
        this.head = newNode;  //updating head

    }
    insertAtTail(data){
        const newNode = new Node(data);

        let current = this.head;
        while (current.next) {
        current = current.next; // Move to last node
        }
        current.next = newNode;

        // this.tail.next = newNode;
        this.tail = newNode;
    }
    insertAtPosition(data, position){

        if(position == 0){
            // this.insertAtHead(data)
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        const newNode = new Node(data)
        let current = this.head;
        // let index = 0;
        for(let i = 0; current !== null && i < position - 1; i++){
            current = current.next;
        }
        //position out of range
        if(current == null){
            console.log("position out of range")
        }

        newNode.next = current.next;
        current.next = newNode;
        
        //if inserting at end
        if(newNode.next == null){
            this.tail = newNode
        }

    } 
    //printList
    printList(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + '->';
            current = current.next; 
        }
        console.log(result + 'null')
    }
    printHeadTail(){
        console.log("Head:", this.head ? this.head.data : "null");
        console.log("Tail:", this.tail ? this.tail.data : "null");
    }
}

let list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(12);
list.insertAtTail(18);
list.insertAtPosition(15, 1)

list.printList();
list.printHeadTail();

