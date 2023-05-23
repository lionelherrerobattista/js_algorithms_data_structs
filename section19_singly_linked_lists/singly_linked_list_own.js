// piece of data - vañ
// reference to next node -next
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		// Create a node
		let newNode = new Node(val);

		if (!this.head) {
			// No head
			// Set head and tail to the node
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Set next property of tail
			this.tail.next = newNode; // Previous node
			this.tail = newNode; // New tail
		}

		// Increment length by one
		this.length++;

		return this; // Return the list
	}

	pop() {
		let current;
		let previous;
		let value; // Value to pop
		if (this.head) {
			current = this.head;
			if (this.length === 1) {
				// List only 1 item
				value = this.head.val; // If only 1 item
				this.head = null;
				this.tail = null;
			} else {
				while (current) {
					if (current.next) {
						previous = current;
					} else {
						value = current.val; //assign value to return
					}
					// previous = current;
					current = current.next;
				}
				// Set 2nd to last, next prop. to null
				previous.next = null;
				// Set tail to be 2nd to last
				this.tail = previous;
			}
			// Decrement length by one
			this.length--;
		}
		return value;
	}

	shift() {
		let value = undefined;

		if (this.head) {
			// Store the head in a variable
			value = this.head;
			// Set the head property to be
			// the current head's next property
			this.head = value.next;
			// Decrement length by 1
			this.length--;

			if (this.length === 0) {
				// No more elements in the list
				this.tail = null;
			}
		}

		return value;
	}

	unshift(val) {
		// Create a new node using the value
		let newNode = new Node(val);
		if (!this.head) { // Empty List
			// Set head a tail to new node
			this.head = newNode;
			this.tail = newNode;
		} else {
			// New node next property is head
			newNode.next = this.head;
			// Set List head to new node
			this.head = newNode;
		}
		// Increment length of list by one
		this.length++;
		// Return Linked List
		return this;
	}
}

// Test

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

// Test - Push
// list.push("!");
// console.log(list);

// Test - Pop
// console.log(list);
// console.log("Pop: ", list.pop());
// console.log(list);
// console.log("Pop: ", list.pop());
// console.log(list);
// console.log("Pop: ", list.pop());
// console.log(list);

// Test - Shift
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// Test - Unshift
console.log(list);
console.log(list.unshift("HI!"));
console.log(list.unshift(123));
