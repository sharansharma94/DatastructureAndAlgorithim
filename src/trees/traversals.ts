class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let zero = new TreeNode(0)
let three = new TreeNode(-3)
let ten = new TreeNode(-10);
let nine = new TreeNode(9)
let five = new TreeNode(5)

//zero.left = three;
//three.left = ten;
//zero.right = nine;
//nine.left = five;

zero.left = ten;
ten.right = three;
zero.right = five
five.right = nine;

const levelOrderTraversal = (root: TreeNode) => {

    if (root === null) return;
    let queue: TreeNode[] = [];
    queue.push(root);

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current.data)
        if (current.left !== null) {
            queue.push(current.left);
        }
        if (current.right !== null) {
            queue.push(current.right);
        }
    }

}
// console.log(zero);

levelOrderTraversal(zero);