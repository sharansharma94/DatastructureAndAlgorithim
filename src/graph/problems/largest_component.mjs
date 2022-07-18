const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
}



function findLargestComponent(graph) {

    const visited = new Set()
    let max = 0;
    for (let key in graph) {
        if (visited.has(key)) continue;

        let count = dfsRecur(graph, key, visited)
        console.log(count);

        if (count > max) max = count;

    }
    console.log(`Maximum is ${max}`);
}


function dfs(graph, start, visited) {
    let count = 0;
    const stack = [start]

    while (stack.length) {
        let cur = stack.pop()
        if (visited.has(cur)) {
            continue
        }

        count++;
        // console.log(cur)
        visited.add(cur)
        for (let neighbour of graph[cur]) {
            stack.push(neighbour)
        }
    }
    return count;

}



function dfsRecur(graph, start, visited) {
    if (visited.has(start)) return 0;

    visited.add(start)

    let count = 1;
    for (let neighbour of graph[start]) {
        count += dfsRecur(graph, neighbour, visited)
    }

    return count;
}

findLargestComponent(graph)