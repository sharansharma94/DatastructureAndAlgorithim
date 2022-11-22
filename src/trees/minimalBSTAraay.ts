
class node {
    data: number;
    left: node | null;
    right: node | null;
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Bstree {

    root: node | null;

    constructor(arr: Array<number>) {
        this.root = this.createMinimalTree(arr, 0, arr.length - 1);
    }

    createMinimalTree(arr: Array<number>, start: number, end: number) {
        if (end < start) { return null }
        const mid = Math.floor(start + (end - start) / 2);

        let current = new node(arr[mid])

        current.left = this.createMinimalTree(arr, start, mid - 1);
        current.right = this.createMinimalTree(arr, mid + 1, end);

        return current;
    }


    print(cur: node | null) {
        if (cur !== null) {
            console.log(`|${cur.data} |`);
            this.print(cur.left);
            this.print(cur.right);
        }
    }

}

function main(): void {
    console.log("entering")

    const nums = [-10, -3, 0, 5, 9]
    let Bst = new Bstree(nums);

    // Bst.root = new node(-10);
    // Bst.root.left = new node(-3);
    // Bst.root.right = new node(0);

    console.log(JSON.stringify(Bst.root));

    // Bst.print(Bst.root);

}

main();