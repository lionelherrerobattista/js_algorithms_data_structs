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
		let node; // node to pop
		if (this.head) {
			current = this.head;
			if (this.length === 1) {
				// List only 1 item
				node = this.head; // If only 1 item
				this.head = null;
				this.tail = null;
			} else {
				while (current) {
					if (current.next) {
						previous = current;
					} else {
						node = current; //assign node to return
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
		return node;
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
		if (!this.head) {
			// Empty List
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

	get(index) {
		let counter = 0;
		let node;

		if (index < 0 || index >= this.length) {
			//invalid index
			node = null;
		} else {
			node = this.head;
			while (counter < index) {
				//loop list, until index is found
				node = node.next;
				counter++;
			}
		}
		return node;
	}

	set(index, value) {
		// use get function to find specific node
		let node = this.get(index);
		let result = false; // if node not found, false

		if (node) {
			// Set new value
			node.val = value;
			result = true;
		}

		return result;
	}

	insert(index, value) {
		let newNode;
		let previousNode;
		let result = false;
		if (index >= 0 && index <= this.length) {
			// index < 0 || index > length --> false
			if (index === this.length) {
				// if index is the same as length --> push
				this.push(value);
			} else if (index === 0) {
				// if index is 0 --> unshift
				this.unshift(value);
			} else {
				// access node at index -1 (previous node) --> get
				previousNode = this.get(index - 1);
				newNode = new Node(value);
				// connect new node to old next
				newNode.next = previousNode.next;
				// set next property of previous node to be the new one
				previousNode.next = newNode;
				this.length++;
			}
			result = true;
		}
		return result;
	}

	remove(index) {
		let node;
		let previousNode;
		if (index >= 0 && index < this.length) {
			if (index === this.length - 1) {
				// if index is the same as length -1 -> pop
				node = this.pop();
			} else if (index === 0) {
				// if index is 0 -> shift
				node = this.shift();
			} else {
				// use get to access index -1
				previousNode = this.get(index - 1);
				node = previousNode.next; // get node at index
				// set next property of previous node
				// to removed node next
				previousNode.next = node.next;
				this.length--;
			}
		}
		return node;
	}

	reverse() {
		let nextNode;
		let previousNode;
		let currentNode;

		// start from beginning
		previousNode = this.head;
		
		// swap head and tail
		this.head = this.tail;
		this.tail = previousNode;

		// change next from tail
		currentNode = previousNode.next;
		this.tail.next = null;

		for (let i = 1; i < this.length; i++) {
			// save next node
			nextNode = currentNode.next;
			// replace the current evaluated node's next prop,
			// should point to the previous node
			currentNode.next = previousNode;
			// move to the next node,
			// 1 - replace previous for current
			previousNode = currentNode;
			// 2 - current is now the next node (stored in aux)
			currentNode = nextNode;
		}

		return this;
	}
}

// Test

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("ALL");
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
// console.log(list);
// console.log(list.unshift("HI!"));
// console.log(list.unshift(123));

// Test - Get
// console.log(list.get(1));
// console.log(list.get(0));
// console.log(list.get(-1)); // index less than 0
// console.log(list.get(4)); // index greater than length

// Test - Set
// console.log(list);
// console.log(list.set(1, "WORLD!")); // True - set new value
// console.log(list.set(34, "WORLD!")); // Index not found - false
// console.log(list);

// TEST - Insert
// console.log(list.insert(1, "WORLD!")); // True - new value at position
// console.log(list.get(1)); // new value WORLD at position 1
// console.log(list.insert(0, "HEY!")); // True - insert first position
// console.log(list.get(0));
// console.log(list.insert(5, "END!")); // True insert last position
// console.log(list.get(5));
// console.log(list.insert(43, "END!")); // false - index is greater than length
// console.log(list.insert(-3, "TEST")); // false - index is negative

// Test - Remove
// console.log(list.remove(1)); // should return "GOODBYE";
// console.log(list);
// console.log(list.remove(0)); // should return "HELLO";
// console.log(list);
// console.log(list.remove(23)); // should return undefined;
// console.log(list);
// console.log(list.remove(1)); // should return "!";
// console.log(list);

// Test - Reverse
for (let i = 0; i < list.length; i++) {
	console.log(list.get(i).val);
}
list.reverse();
for (let i = 0; i < list.length; i++) {
	console.log(list.get(i).val);
}
