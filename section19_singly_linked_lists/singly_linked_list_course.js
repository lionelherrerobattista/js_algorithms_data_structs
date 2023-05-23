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

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
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
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);

// Test - Unshift
console.log(list);
console.log(list.unshift("HI!"));
console.log(list.unshift(123));
