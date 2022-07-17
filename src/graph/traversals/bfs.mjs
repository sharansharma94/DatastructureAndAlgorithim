const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}



function bfs(graph, start) {

    const Q = [start]

    while (Q.length) {
        let current = Q.shift();
        console.log(current);
        for (let neighbour of graph[current]) {
            Q.push(neighbour)
        }
    }

}


bfs(graph, 'a')