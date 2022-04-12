interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function maxDepthDFSRecursive(root: TreeNode | null): number {
  if (root === null) return 0;

  let left = maxDepthDFSRecursive(root.left);
  let right = maxDepthDFSRecursive(root.right);

  return 1 + Math.max(left, right);
}

function maxDepthBFS(root: TreeNode | null): number {
  if (root === null) return 0;

  let queue = [];
  queue.push(root);

  let level = 0;

  while (queue.length > 0) {
    console.log(queue);
    level += 1;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return level;
}

// function maxDepthDFS(root: TreeNode | null): number {
//   console.log(root);
//   if (root === null) return 0;
//   let level = 0;

//   let stack = [];
//   stack.push(root);

//   while (stack.length > 0) {
//     level += 1;
//     const len = stack.length;
//     for (let i = 0; i < len; i++) {
//       let current = stack.pop();
//       if (current.left) {
//         stack.push(current.left);
//       }
//       if (current.right) {
//         stack.push(current.right);
//       }
//     }
//   }

//   return level;
// }

function maxDepthDFS(root: TreeNode | null): number {
  let level = 0;

  let stack = [];
  stack.push([root, 1]);

  while (stack.length > 0) {
    let [node, depth] = stack.pop();
    if (node) {
      level = Math.max(level, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return level;
}

let root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: { val: 25, left: null, right: null }, right: null },
  },
};

// console.log(maxDepthBFS(root));
console.log(maxDepthDFS(root));
