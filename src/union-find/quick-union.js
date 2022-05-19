class QuickFind {

    constructor(n) {
        this.length = n;
        this.id = new Array(n);

        for (let index = 0; index < n; index++) {
            this.id[index] = index;
        }
    }

    findRoot(src) {
        while (src !== this.id[src]) src = this.id[src]
        return src
    }

    union(src, dest) {
        let srcRoot = this.findRoot(src);
        let destRoot = this.findRoot(dest);
        this.id[srcRoot] = destRoot;
    }

    connected(src, dest) {
        return this.findRoot(src) === this.findRoot(dest);
    }

    find(src) {
    }

    count() {
    }
}



const qf = new QuickFind(10);
qf.union(4, 3);
qf.union(3, 8);
qf.union(6, 5);
qf.union(9, 4);
qf.union(2, 1);

console.log(qf.connected(0, 1))
console.log(qf.connected(8, 9))

qf.union(5, 0);
qf.union(7, 2);
qf.union(6, 1);
qf.union(1, 0);


console.log(qf.connected(0, 7))
console.log(qf.connected(8, 6))