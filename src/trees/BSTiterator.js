class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(node) {
        this.root = node
    }
    insert(val) {
        let node = new Node(val);
        if (this.root === null) {
            this.root = node
            return
        }

        let current = this.root
        while (true) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = node
                    return;
                }
                //go to left
                current = current.left;
            } else if (val > current.val) {
                // go to right
                if (current.right === null) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }

    print(node) {
        if (node) {
            this.print(node.left)
            console.log(node.val);
            this.print(node.right)
        }
    }
    inorder() {
        // to do 
    }

    iterator(start = this.root, end = Infinity, step = 1) {
        //to do 
        let nextNode = start;


        let count = 0;

        const bstIterator = {
            next() {
                let result;
                if (hasNext) {
                    result = { value: ' ', done: false }
                    return result
                }
                return { value: ' ', done: true }
            }

        }

        return bstIterator;
    }
}

const bst = new BST(null);

bst.insert(10);
bst.insert(7);
bst.insert(11);
bst.insert(6);

bst.print(bst.root);