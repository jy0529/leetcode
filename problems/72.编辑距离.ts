/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
    const m = word1.length + 1, n = word2.length + 1;
    // m x n 的二维数组
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0;i < m;i++) {
        dp[i][0] = i;
    }
    for(let j = 0;j < n;j++) {
        dp[0][j] = j;
    }
    for(let i = 1;i < m;i++) {
        for(let j = 1;j < n;j++) {
            const w1 = word1.charAt(i - 1);
            const w2 = word2.charAt(j - 1);
            if (w1 === w2) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                ) + 1;
            }
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

