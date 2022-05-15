class AdjNode {
  constructor(data) {
    this.vertex = data;
    this.next = null;
  }
}

class Graph {
  constructor() {
    this.V = vertices;
    this.graph = new Array(this.V);
  }

  addEdge(src, dest) {

    const destNode = new AdjNode(dest);
    destNode.next = this.graph[src];
    this.graph[src] = destNode;

    const srcNode = new AdjNode(src)
    srcNode.next = this.graph[dest];
    this.graph[dest] = srcNode

  }


  print() {
    for (let index = 0; index < this.V; index++) {
      console.log(`vertex ${index} : `)
      let temp = this.graph[index];
      while (temp) {
        console.log(`--> ${temp.vertex}`)
        temp = temp.next

      }
      console.log()
    }
  }
}

let vertices = 5;
const graph = new Graph(vertices);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);

graph.print()