const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['k', 'v'],
    ['w', 'v'],
    ['k', 'z'],
    ['v', 'x']
]



shortestPath(edges, 'w', 'z')


function shortestPath(edges, src, dest) {
    const graph = buildGraph(edges)
    console.log(graph);

    //Using bfs

    const queue = [[src, 0]]
    const visited = new Set([src]);

    while (queue.length) {
        let [cur, count] = queue.shift();


        if (cur === dest) {
            console.log('Shortest distance is: ', count)
            return;
        }
        for (let neighbour of graph[cur]) {
            if (!visited.has(cur)) {

                visited.add(cur)
                queue.push([neighbour, count + 1])
            }
        }

    }

    return -1
}


function buildGraph(edges) {
    let graph = {}
    for (let edge of edges) {
        let [src, dest] = edge;

        if (!(src in graph)) graph[src] = [];
        if (!(dest in graph)) graph[dest] = [];

        graph[src].push(dest)
        graph[dest].push(src)


    }
    return graph
}