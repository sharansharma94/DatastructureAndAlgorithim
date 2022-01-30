class BinNode {
  data = null;
  left = null;
  right = null;

  constructor(num: number) {
    this.data = num;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  _root = null;
  constructor(tree: BinarySearchTree) {
    if (tree) this._root = tree;
  }

  insert(num: number) {
    if (this._root === null) this._root = new BinNode(num);
    let current = this._root;

    while (true) {
      if (num < current.data) {
        if (current.left) current = current.left;
        else {
          current.left = new BinNode(num);
          break;
        }
      } else if (num > current.data)
        if (current.right) current = current.right;
        else {
          current.right = new BinNode(num);
          break;
        }
      else break;
    }
  }

  delete(num: number) {
    return num;
  }

  deleteIterative(num: number) {
    let current = this._root;
    let parent = this._root;

    while (current !== null) {
      if (current.data === num) {
        //item has no element
        if (current.left === null && current.right === null) parent;

        break;
      }
      if (num < current.data) {
        parent = current;
        current = current.left;
      }
      if (num > current.data) {
        parent = current;
        current = current.right;
      }
    }

    if (!current) console.log("not found");
  }
}

const bst = new BinarySearchTree(null);
bst.insert(10);
bst.insert(4);
bst.insert(5);

bst.insert(12);

console.log(bst);

bst.delete(12);
