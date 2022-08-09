// Adding an Element At the Head

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

   removeAtHead(){
      if(this.head == null) return;
      let temp = this.head.next; // stored access to new head
      this.head.next = null;  // de link the old head
      this.head = temp; // update the head
   }

   addAtTail(data) {
      if(this.head == null) { // if linked list is empty at at tail == add at head
         this.addAtHead()
         return;
      }
      let tail = this.head;
      while(tail.next != null) tail = tail.next;
      let newNode = new Node(data);
      tail.next = newNode;
   }

	removeAtTail() {
    if(this.head == null) return; // empty ll
    if(this.head.next == null) { // only one node in the list
       this.head = null;
       return;
    }
    let temp = this.head;
    while(temp.next.next != null) {
       // the above condition gives us access to second last node
       temp = temp.next;
    }
    temp.next = null;
 }

   addAtMiddle(pos, data) {
    if(this.head == null) {
       this.addAtHead(data);
       return;
    }
    let temp = this.head;
    for(let i = 0; i < pos && temp.next != null; i++) {
       temp = temp.next;
    }
    // now inside temp we have access to the node at pos
    let newNode = new Node(data);
    newNode.next = temp.next;
    temp.next = newNode;
 }

   removeAtMiddle(pos) {
      if(this.head == null) return; // Linked list is empty
      if(this.head.next == null || pos == 0) {  // either you have a single node or pos is 0
         this.removeAtHead();
         return;
      }
      let prev = this.head;
      for(let i=0 ; i < pos - 1; i++) {
         prev = prev.next;
      }
      let nodeToBeDeleted = prev.next;
      prev.next = nodeToBeDeleted.net;
      nodeToBeDeleted.next = null;
   }

   display () {
      // console.log(this.head);
      let temp = this.head;  // to print all the nodes data
      while(temp != null) {
         console.log(temp.data);
         temp = temp.next;
      }
   }
}

let ll = new LinkedList;
   ll.addAtHead(5)
   ll.addAtHead(4)
   ll.addAtHead(3)
   ll.addAtHead(2)
   ll.addAtHead(1)

   ll.addAtMiddle(1,10)
   ll.removeAtTail()
ll.display()




