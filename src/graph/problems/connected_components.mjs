import { convertEdgesToGraph } from "../conversion/edgesToGraph.mjs"

const graph = { '3': [], '10': [] }

const edges = [
    ["1", "2"],
    ["4", "6"],
    ["5", "6"],
    ["7", "6"],
    ["8", "6"],
    // ['3', '10']
]



function findConnectedComponets(graph) {

    let count = 0

    let visited = new Set();

    for (let k in graph) {
        if (depthFirstSearch(graph, k, visited, count)) {
            count++
        }
    }

    console.log(count);

}


function depthFirstSearch(graph, start, visited) {

    if (visited.has(start)) {
        return false
    }

    visited.add(start)

    for (let neighbour of graph[start]) {
        depthFirstSearch(graph, neighbour, visited)
    }

    return true
}
convertEdgesToGraph(graph, edges)
findConnectedComponets(graph)

console.log(graph);