class Graph {

    constructor(n) {
        this.V = n;
        this.graph = {}
    }

    addEdge(src, dest) {
        if (Array.isArray(this.graph[src]))
            this.graph[src].push(dest);
        else
            this.graph[src] = [dest];
    }

    dfs(d, visitedVertex) {
        if (d === undefined || d === null) return
        visitedVertex[d] = true;
        console.log(d);
        if (Array.isArray(this.graph[d])) {
            for (let adj of this.graph[d]) {
                if (!visitedVertex[adj])
                    this.dfs(adj, visitedVertex)
            }
        }
    }

    printSCC() {
        const stact = [];
        visitedVertex = new Array(this.V).fill(false)
    }

}

const g = new Graph(8)
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 0);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(6, 4);
g.addEdge(6, 7);

console.log("Strongly Connected Components:");
// g.printSCC()

g.dfs(0, [])