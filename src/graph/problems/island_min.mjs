const grid = [
    ['W', 'L', 'W', 'L', 'W'],
    ['L', 'L', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'L', 'W', 'W'],
];

function dfs(grid, start, visited) {

    const [i, j] = start;

    const rowInBounds = 0 <= i && i < grid.length
    const colInBounds = 0 <= j && j < grid[0].length
    if (!rowInBounds || !colInBounds) return 0

    if (grid[i][j] === "W") return 0


    if (visited.has(`${i},${j}`)) return 0

    visited.add(`${i},${j}`)
    let count = 1;
    count += dfs(grid, [i - 1, j], visited)
    count += dfs(grid, [i + 1, j], visited)
    count += dfs(grid, [i, j - 1], visited)
    count += dfs(grid, [i, j + 1], visited)

    return count;
}

function findMinIsland(grid) {
    let min = Number.MAX_SAFE_INTEGER;

    const visited = new Set(); // 'i,j'

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] === "L") {
                let count = dfs(grid, [i, j], visited)
                // console.log(count);
                if (count > 0 && count < min) min = count
            }
        }
    }

    return min;
}

console.log(findMinIsland(grid));