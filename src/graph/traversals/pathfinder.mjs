const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
}


const graphWithCycle = {
    i: ['j', 'k'],
    j: ['i', 'k'],
    k: ['i', 'm', 'l', 'j'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}



function hasPath(graph, src, dest) {

    if (!(src in graph) && !(dest in graph))
        return false

    const stack = [src];
    const visited = {};


    while (stack.length) {
        let cur = stack.pop();
        visited[cur] = true;
        if (cur === dest)
            return true

        const neighbours = graph[cur]
        if (neighbours) {

            for (let neighbour of neighbours) {
                if (visited[neighbour]) continue;

                stack.push(neighbour)
                visited[neighbour] = true
            }
        }
    }
    return false

}

function hasPathRecu(graph, src, dest, visited) {

    if (!(src in graph) && !(dest in graph))
        return false

    if (src === dest)
        return true;

    if (visited.has(src)) return false


    visited.add(src)
    for (let neighbour of graph[src]) {
        if (hasPathRecu(graph, neighbour, dest, visited)) {
            return true
        }
    }

    return false

}


function hasPathBFS(graph, src, dest) {

    if (!(src in graph && dest in graph)) return false;

    if (src === dest) return true;

    const queue = [src];
    const visited = {}

    while (queue.length) {
        const current = queue.shift()
        visited[current] = true;
        if (current === dest) return true;

        for (let neighbour of graph[current]) {
            if (visited[neighbour]) continue;

            queue.push(neighbour)
        }
    }

    return false

}


const visited = new Set()
console.log(
    hasPathRecu(graphWithCycle, 'i', 'k', visited)
);


console.log(
    hasPath(graphWithCycle, 'i', 'o')
);
// console.log(
//     hasPathBFS(graph, 'h', 'k')
// );