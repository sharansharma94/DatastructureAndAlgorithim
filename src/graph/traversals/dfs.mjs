const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}




function depthFirstSearch(graph, start) {

    //check is node exists
    if (!graph[start]) return;

    const stack = []
    const visited = {}
    stack.push(start)


    while (stack.length) {
        let cur = stack.pop();
        visited[cur] = true;
        console.log(cur);
        const neighbours = graph[cur];

        for (let neighbour of neighbours) {
            if (visited[neighbour]) continue;

            stack.push(neighbour)
            visited[neighbour] = true;
        }

    }

}

function dpsRecursive(graph, start) {

    console.log(start);
    for (let neighbour of graph[start]) {
        dpsRecursive(graph, neighbour)
    }

}

dpsRecursive(graph, 'a')

// depthFirstSearch(graph, 'a')