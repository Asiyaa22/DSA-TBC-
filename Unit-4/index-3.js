//code for deletions
class Node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null
    }
    //delete operations
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
    }
}