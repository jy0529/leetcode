/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    let ans = 0;

    const m = grid.length;
    const n = grid[0].length;
    const visited: Map<string, boolean> = new Map<string, boolean>();

    for(let i = 0;i < m;i++)
        for(let j = 0;j < n;j++)
            if (grid[i][j] === '1' && !visited.get(`${i}-${j}`)) {
                ans++;
                bfs(i, j);
            }

    function bfs(i: number, j: number) {
        const dx = [-1, 0, 0, 1];
        const dy = [0, -1, 1, 0];
        const queue = [[i, j]];
        visited.set(`${i}-${j}`, true);
        while(queue.length > 0) {
            // @ts-ignore
            const [x, y] = queue.pop();
            for(let i = 0;i < 4;i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (grid[nx][ny] !== '1') continue;
                if (visited.get(`${nx}-${ny}`) === true) continue;
                queue.push([nx, ny]);
                visited.set(`${nx}-${ny}`, true);
            }
        }
    }

    return ans;
};
// @lc code=end

