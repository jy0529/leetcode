/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */


// @lc code=start
function combine(n: number, k: number): number[][] {
    const res = [];
    const path = [];
    dfs(n, k, 1, path, res);
    return res;
};

function dfs(n: number, k: number, begin: number, path: number[], res: number[][]) {
    if (path.length === k) {
        res.push(path.slice());
        return;
    }
    for(let i = begin; i<= n; i++) {
        path.push(i);
        dfs(n, k, i + 1, path, res);
        path.pop();
    }
}

// @lc code=end

