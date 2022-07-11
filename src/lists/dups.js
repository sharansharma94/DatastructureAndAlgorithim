// Write code to remove dups from an unsorted linked list
// how would you solve this problem if a temporary buffer is not allowed? 


class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(node) {
        if (this.head === null) {
            this.head = node
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }

    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.val + " ")
            current = current.next
        }
    }

    removeDupsWithSpace() {

        // O(n) time
        // O(n) space

        const unique = new Set();
        let current = this.head;

        unique.add(current.val)

        while (current.next) {

            if (unique.has(current.next.val)) {
                // remove this element 
                current.next = current.next.next;
            } else {
                unique.add(current.next.val)
                current = current.next
            }
        }
    }

    removeDupsWithBruteForce() {
        // O(n^2) time
        // O(1) space
        let current = this.head;

        while (current) {

            // find all occurences of current one and unlink them 
            let temp = current;
            while (temp.next) {
                if (temp.next.val === current.val) {
                    temp.next = temp.next.next;
                } else
                    temp = temp.next;
            }
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.append(new Node(3))
ll.append(new Node(7))
ll.append(new Node(1))
ll.append(new Node(9))
ll.append(new Node(3))
ll.append(new Node(2))
ll.append(new Node(0))
ll.append(new Node(9))

ll.print()

// ll.removeDupsWithSpace()
ll.removeDupsWithBruteForce()
console.log("\n")
ll.print()
