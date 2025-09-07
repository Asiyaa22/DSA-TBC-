class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

let node_1 = new Node(10);
let node_2 = new Node(12);

node_1.next = node_2;

console.log(node_1);



