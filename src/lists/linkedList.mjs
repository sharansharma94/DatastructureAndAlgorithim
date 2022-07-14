class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkList {
    constructor() {
        this.head = null;
    }

    append(node) {
        if (this.head === null) {
            this.head = node
            return
        }

        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = node

    }
    generate(items) {
        for (let item of items) {
            let node = new Node(item);
            this.append(node)
        }
    }
    print() {
        let cur = this.head;
        while (cur) {
            process.stdout.write(`${cur.data} -> `);
            cur = cur.next;
        }
        process.stdout.write("null")
        console.log();
    }
}

export default LinkList;