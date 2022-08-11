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
// ----------------------------------

   reverseLLPointerIterative() {
		/**
		 * Time: O(n)
		 * Space: O(1)
		 */
		let prev = null;
		let curr = this.head;
		while(curr != null) {
			let temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}
		this.head = prev;
	}

// ---------------------------------

   f(curr) {
   /**
    * Time: O(n)
    * Space: O(n) // due to call stack space, call stack will have n entries when we reach tail
    */
   if(curr.next == null) {
      // if node's next is null it is the tail node
      return curr;
     }
   let tail = this.f(curr.next); // recursively assume it reverses
   curr.next.next = curr; // self work
   curr.next = null; // self work
   return tail;
   }
   reverseLLPointersRecursive() {
     let tail = this.f(this.head);
     this.head = tail;
     }

   //------------------------

   reverseLLValueIterative() {
		/**
		 * Time: O(n^2)
		 * Space: O(1)
		 */
		let len = 0;
		let temp = this.head;
		while(temp != null) {
			temp = temp.next;
			len++;
		}
		let curr = this.head;
		for(let i = 0; i < len/2; i++) {
			let temp = this.head;
			// console.log(curr.data);
			for(let j = 0; j < len - i - 1; j++) {
				temp = temp.next;
			}
			let v = curr.data;
			curr.data = temp.data;
			temp.data = v;
			curr = curr.next;
		}
	}
   //---------------------------
   g(curr) {
		/**
		 * Time: O(n)
		 * Space: O(n)
		 */
		if(curr == null) {
			return;
		}
		this.g(curr.next);
		if(this.start == curr || curr.next == this.start) {
			this.flag = false;
		}
		if(this.flag == true) {
			let temp = this.start.data;
			this.start.data = curr.data;
			curr.data = temp;
			this.start = this.start.next;
		}
	}
	reverseLLValueRecursive() {
		this.start = this.head;
		this.flag = true;
		this.g(this.head);
	}


}

let ll = new LinkedList();
ll.addAtHead(7);
ll.addAtHead(6);
ll.addAtHead(5);
ll.addAtHead(4);
ll.addAtHead(3);
ll.addAtHead(2);
ll.addAtHead(1);
ll.display();
console.log("***");
ll.reverseLLValueRecursive();
ll.display();

