class QuickFind {

    constructor(n) {
        this.length = n;
        this.id = new Array(n);

        for (let index = 0; index < n; index++) {
            this.id[index] = index;
        }
    }

    union(src, dest) {
        let srcID = this.id[src];
        let destID = this.id[dest];
        for (let index = 0; index < this.length; index++) {
            if (this.id[index] === destID) {
                this.id[index] = srcID;
            }

        }
    }

    connected(src, dest) {
        return this.id[src] === this.id[dest];
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