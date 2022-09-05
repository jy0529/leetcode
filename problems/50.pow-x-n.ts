/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    let temp = myPow(x, Math.floor(n / 2));
    let ans = temp * temp;
    if (n % 2 === 1) ans *= x;
    return ans;
};
// @lc code=end

