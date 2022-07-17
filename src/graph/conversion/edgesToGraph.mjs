const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
    ['k', 'j']
]

const graph = {}

function addVertex(graph, vertex) {
    if (vertex in graph) return
    graph[vertex] = []
}
function convertEdgesToGraph(graph, edges) {

    for (let edge of edges) {
        let [src, dest] = edge;

        addVertex(graph, src)
        addVertex(graph, dest)

        graph[src].push(dest)
        graph[dest].push(src)
    }

}


convertEdgesToGraph(graph, edges)
console.log(graph);