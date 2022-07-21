const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];
const neighbours = (grid, node) => {
    const [i, j] = node;
    // i-1 j up 
    // i j-1 left
    // i j+1 right
    // i+1 j down

    const neighbours = [];

    if (i - 1 >= 0) {
        if (grid[i - 1][j] === 'L')
            neighbours.push([i - 1, j])
    }

    if (i + 1 < grid.length)
        if (grid[i + 1][j] === 'L')
            neighbours.push([i + 1, j])

    if (j - 1 >= 0)
        if (grid[i][j - 1] === 'L')
            neighbours.push([i, j - 1])

    if (j + 1 < grid.length)
        if (grid[i][j + 1] === 'L')
            neighbours.push([i, j + 1])

    return neighbours
}

const dfs = (grid, node, visited) => {
    let [i, j] = node;
    if (visited[i][j]) return;


    visited[i][j] = true;

    for (let neighbour of neighbours(grid, [i, j])) {
        dfs(grid, neighbour, visited)
    }

}

const islandCount = (grid) => {

    const visited = grid.map(itm => {
        return itm.map(k => false)
    });

    let count = 0;
    console.log(visited);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {


            let current = grid[i][j];
            // if water skip if land do dfs

            if (current === 'L') {
                if (!visited[i][j]) {
                    count++;
                    dfs(grid, [i, j], visited)
                }
            }
            process.stdout.write(grid[i][j])
        }
        console.log();
    }

    // console.log(neighbours(grid, [0, 1]));
    console.log(visited);
    console.log(`Total island's are : ${count}`);
}




islandCount(grid)


//find neighbours
// dfs on all neighvours who is having land 
