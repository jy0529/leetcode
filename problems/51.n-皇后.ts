/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
    let used: boolean[] = new Array(n).fill(false);
    let usedPlus = {};
    let usedMinus = {};
    let selected: number[] = [];
    let _ans: number[][] = [];

    function dfs(row: number) {
        if (row === n) {
            _ans.push(selected.slice());
            return;
        }
        for(let col = 0;col < n;col++) {
            if (
                !used[col] &&
                !usedPlus[row + col] &&
                !usedMinus[row - col]
            ) {
                used[col] = true;
                usedPlus[row + col] = true;
                usedMinus[row - col] = true;
                selected.push(col);
                dfs(row + 1);
                selected.pop();
                usedMinus[row - col] = false;
                usedPlus[row + col] = false;
                used[col] = false;
            }
        }
    }

    dfs(0);
    const ans: string[][] = _ans.map(item => {
        return item.map(value => {
            return 'Q'.padStart(value + 1, '.').padEnd(n, '.');
        });
    });
    return ans;
};
// @lc code=end

