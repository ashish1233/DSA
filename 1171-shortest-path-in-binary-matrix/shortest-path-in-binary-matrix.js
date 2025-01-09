/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
     const n = grid.length;
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1; // If start or end is blocked, no path exists
    
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1], // Right, Left, Down, Up
        [1, 1], [1, -1], [-1, 1], [-1, -1] // 4 Diagonals
    ];
    
    // BFS queue, starting with the top-left corner (0, 0)
    const queue = [[0, 0, 1]]; // [x, y, distance]
    grid[0][0] = 1; // Mark start as visited
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        // If we reached the bottom-right corner
        if (x === n - 1 && y === n - 1) {
            return dist;
        }
        
        // Explore all 8 directions
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            // Check if the new position is within bounds and is a clear cell
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 0) {
                grid[nx][ny] = 1; // Mark as visited
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1; // No path found
};