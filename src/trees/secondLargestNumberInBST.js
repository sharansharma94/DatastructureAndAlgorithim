class Node {
  constructor(d) {
    this.data = d;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    this.root = this.insertRec(this.root, data);
  }

  insertRec(node, data) {
    if (node === null) {
      this.root = new Node(data);
      return this.root;
    }

    if (data < node.data) {
      node.left = this.insertRec(node.left, data);
    } else {
      node.right = this.insertRec(node.right, data);
    }

    return node;
  }

  secondLargestUtil(node, C) {
    if (node === null || C.c >= 2) return;

    this.secondLargestUtil(node.right, C);

    C.c++;

    if (C.c === 2) {
      console.log(node.data);
      return;
    }

    this.secondLargestUtil(node.left, C);
  }

  secondLargest(node) {
    let C = new Count();
    this.secondLargestUtil(this.root, C);
  }
}
class Count {
  constructor() {
    this.c = 0;
  }
}

let bst = new BST();

bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);
bst.insert(90);

bst.secondLargest(bst.root);
