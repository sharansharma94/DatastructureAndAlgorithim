// find kth node from the last 
class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class List {
    constructor(node) {
        this.head = node;
    }
    print() {
        let cur = this.head
        while (cur) {
            process.stdout.write(cur.data + ' ');
            cur = cur.next;
        }
        process.stdout.write('\n')
    }

    findFromLast(n) {
        // O(n) time O(1) space
        if (n <= 0) {
            console.log("\x1b[31m%s\x1b[0m", "Number can't be less than 1");
            return
        }
        let slow = this.head;
        let runner = this.head;

        for (let i = 0; i < n; i++) {
            if (runner.next === null) {
                console.log("\x1b[31m%s\x1b[0m", "Number out of bound");
                return
            }
            runner = runner.next;
        }

        while (runner) {
            slow = slow.next;
            runner = runner.next;
        }

        console.log("kth element is : ", slow.data);
    }
}

const first = new Node(1)
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);


first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

const ll = new List(first)
// console.log();

ll.print()
ll.findFromLast(0)