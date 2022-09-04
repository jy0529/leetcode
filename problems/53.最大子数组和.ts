/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    // 求子段和算法
    // // 前缀和 preSums S
    // const preSums = [0];
    // for(let num of nums) {
    //     preSums.push(preSums[preSums.length - 1] + num);
    // }
 
    // // Max(S[r] - S[l - 1]) =>
    // // 从右开始遍历 Max(S[i] - S[l - 1]) =>
    // // Min(S[l - 1]) => Min(S[i - 1]) i 前面的前缀和最小
    // // 维护一个 minS , 记录最小前缀和
    // const minPreSums: number[] = [preSums[0]];
    // for(let preSum of preSums) {
    //     minPreSums.push(Math.min(minPreSums[minPreSums.length - 1], preSum));
    // }

    // let ans = -Infinity;
    // for(let i = preSums.length - 1;i > 0;i--) {
    //     ans = Math.max(ans, preSums[i] - minPreSums[i]);
    // }
    // return ans;

    // 贪心算法
    let pre = 0;
    let ans = -Infinity;
    for(let num of nums) {
        pre = num + pre;
        ans = Math.max(ans, pre);
        if (pre < 0) pre = 0;
    }
    return ans;
};
// @lc code=end

