// Adjacency list implementation hashset of linkedlist
class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

class List {
    constructor(data) {
        this.head = null
        this.vertex = data
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return
        }

        let cur = this.head;
        while (cur.next) {
            cur = cur.next
        }
        cur.next = newNode;
    }
}

class Graph {
    constructor() {
        this.vertices = {}
    }

    addVertex(data) {
        let ll = new List(data);
        this.vertices[data] = ll;
    }

    addEdge(from, to) {
        const fromV = this.vertices[from];
        const toV = this.vertices[to]
        if (fromV && toV) {
            fromV.add(to);
            toV.add(from);
        } else {
            console.log("given vertices not available");
        }
    }
    contains(name) {
        return !!this.vertices[name]
    }

    neighbours(name) {
        if (!this.contains(name)) return;

        const vertex = this.vertices[name];
        return (this._listToArray(vertex));
    }

    nodes() {
        return this._objectKeysToArray(this.vertices)
    }

    node(name) {
        return this.vertices[name]
    }

    connected(from, to) {
        if (!this.contains(from)) return false;

        let cur = this.vertices[from].head;
        while (cur) {
            if (cur.val === to)
                return true
            cur = cur.next;
        }
        return false

    }

    edges() {

        let edge = []
        for (let k in this.vertices) {

            const edgesOfK = this._listToArray(this.vertices[k])
            for (let edgeofk of edgesOfK) {
                edge.push([k, edgeofk])
            }
        }

        return edge
    }


    _objectKeysToArray(obj) {
        const arr = []
        for (let k in obj) {
            arr.push(k)
        }
        return arr
    }
    _listToArray(list) {
        const arr = []
        let cur = list.head;
        while (cur) {
            arr.push(cur.val)
            cur = cur.next;
        }
        return arr
    }
}


export class DirectedGraph extends Graph {
    addEdge(from, to) {
        const fromV = this.vertices[from];
        const toV = this.vertices[to]
        if (fromV && toV) {
            fromV.add(to);
        } else {
            console.log("given vertices not available");
        }
    }
}




// const graph = new Graph();
// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);


// graph.addEdge(0, 3)
// graph.addEdge(0, 1)
// graph.addEdge(0, 2)


// console.log(graph.contains(3));


// console.log("connected : ", graph.connected(6, 4));

// console.log(graph.edges());

// graph.neighbours(0)
// console.log(graph.nodes());
// console.log(graph.vertices);
