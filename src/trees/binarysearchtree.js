var BinNode = /** @class */ (function () {
    function BinNode(num) {
        this.data = null;
        this.left = null;
        this.right = null;
        this.data = num;
        this.left = null;
        this.right = null;
    }
    return BinNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(tree) {
        this._root = null;
        if (tree)
            this._root = tree;
    }
    BinarySearchTree.prototype.insert = function (num) {
        if (this._root === null)
            this._root = new BinNode(num);
        var current = this._root;
        while (true) {
            if (num < current.data) {
                if (current.left)
                    current = current.left;
                else {
                    current.left = new BinNode(num);
                    break;
                }
            }
            else if (num > current.data)
                if (current.right)
                    current = current.right;
                else {
                    current.right = new BinNode(num);
                    break;
                }
            else
                break;
        }
    };
    BinarySearchTree.prototype["delete"] = function (num) {
        var current = this._root;
        while (current !== null) {
            if (current.data === num)
                break;
            if (num < current.data) {
                current = current.left;
            }
            if (num > current.data) {
                current = current.right;
            }
        }
        if (!current)
            console.log("not found");
        else
            console.log(current);
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree(null);
bst.insert(10);
bst.insert(4);
bst.insert(5);
bst.insert(12);
console.log(bst);
bst["delete"](12);
