/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
       const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
        [0, 1],   // Right
        [1, 0],   // Down
        [0, -1],  // Left
        [-1, 0]   // Up
    ];
    
    let queue = []; // To store rotten oranges with their timestamp
    let freshCount = 0; // Count of fresh oranges
    
    // Initialize the queue with all rotten oranges and count fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]); // [row, col, minutesElapsed]
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    
    let minutes = 0; // Track the time taken for all oranges to rot
    
    // Perform BFS
    while (queue.length > 0) {
        const [x, y, time] = queue.shift();
        minutes = time; // Update minutes to the current time
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            // Check if the adjacent cell is valid and has a fresh orange
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 1) {
                grid[nx][ny] = 2; // Rot the fresh orange
                freshCount--; // Decrease the fresh orange count
                queue.push([nx, ny, time + 1]); // Add to queue with updated time
            }
        }
    }
    
    // If there are still fresh oranges left, return -1
    return freshCount === 0 ? minutes : -1;
};