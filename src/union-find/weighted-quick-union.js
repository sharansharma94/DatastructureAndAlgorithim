class WeightedQuickUnion {
    constructor(n) {
        this.V = n;
        this.id = new Array(n);
        for (let index = 0; index < n; index++) {
            this.id[index] = index;
        }
        this.weights = new Array(n).fill(0);
    }

    root(src) {
        while (src !== this.id[src]) {
            src = this.id[src]
        }
        return src;
    }

    connected(src, dest) {
        return this.root(src) === this.root(dest);
    }

    union(src, dest) {
        let srcRoot = this.root(src);
        let destRoot = this.root(dest);
        if (srcRoot === destRoot) return

        if (this.weights[srcRoot] < this.weights[destRoot]) {
            this.id[srcRoot] = destRoot;
            this.weights[destRoot] += this.weights[srcRoot];
        } else {
            this.id[destRoot] = srcRoot;
            this.weights[srcRoot] += this.weights[destRoot];
        }

    }
}






const wqf = new WeightedQuickUnion(10);
wqf.union(4, 3);
wqf.union(3, 8);
wqf.union(6, 5);
wqf.union(9, 4);
wqf.union(2, 1);

console.log(wqf.connected(0, 1))
console.log(wqf.connected(8, 9))
console.log(wqf.connected(5, 0))

// wqf.union(5, 0);
// wqf.union(7, 2);
// wqf.union(6, 1);
// wqf.union(1, 0);
