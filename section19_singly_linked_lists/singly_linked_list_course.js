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
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode; // Previous node
			this.tail = newNode; // New tail
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val); // converts to boolean
		if (index === 0) return !!this.unshift(val); // converts to boolean

		let newNode = new Node(val);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let previousNode = this.get(index - 1);
		let removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev; // reverse
			prev = node;
			node = next; // current is now next
		}
		return this;
	}

	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
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

// test - reverse
list.print();
list.reverse();
list.print();
