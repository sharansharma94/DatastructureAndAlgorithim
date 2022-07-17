import { DirectedGraph } from "./graph.mjs"


function dfs(graph, start) {

    if (!graph) return
    const visited = []
    const stack = []

    // visited[start] = true;
    stack.push(graph.node(start))

    while (stack.length) {
        let current = stack.pop();
        let children = current.head;
        // console.log(`visiting : ${current.vertex}`);

        while (children) {
            let childrenVal = children.val
            if (!visited[childrenVal]) {
                stack.push(graph.node(current.vertex))
                console.log(`visiting : ${childrenVal}`);
                visited[childrenVal] = true;
                stack.push(graph.node(childrenVal))
                break
            }
            children = children.next

        }




    }



}



export function bfs(graph, start) {

    const node = graph.node(start)
    if (!node) return

    const visited = []

    console.log("visited:", start)
    visited[start] = true;

    const queue = [];
    queue.push(node)

    while (queue.length) {

        let current = queue.shift();
        current = current.head;
        while (current) {
            let value = current.val
            if (!visited[value]) {
                console.log("visited:", value)
                visited[value] = true;
                queue.push(graph.node(value))
            }
            current = current.next
        }
    }

}




const graph = new DirectedGraph();
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)



graph.addEdge(0, 2)
graph.addEdge(0, 1)
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 3)
graph.addEdge(3, 4)
graph.addEdge(4, 5)
graph.addEdge(4, 0)



console.log(graph.neighbours(0))



dfs(graph, 0)
bfs(graph, 0)