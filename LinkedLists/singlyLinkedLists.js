class Node {
   constructor(d) {
      this.data = d ;  // data parameter represents the actual data stored in a node
      this.next = null; // it will ref to next node address
   }
}

class LinkedList { // singly Linked List

   constructor() {  // when we initialise a New Linked List Head will be empty
      this.head = null;
   }
   addAtHead(data) {
      let newNode = new Node(data); // Created a new node
      newNode.next = this.head; // set the head to next of node
      this.head = newNode;  // updatee new node to the head
   }
   display () {
      console.log(this.head);
   }
}

let ll = new LinkedList;
   ll.addAtHead(5)
   ll.addAtHead(4)
   ll.addAtHead(3)
   ll.addAtHead(2)
   ll.addAtHead(1)
ll.display()