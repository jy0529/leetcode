/*
 * @lc app=leetcode.cn id=1248 lang=typescript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
function numberOfSubarrays(nums: number[], k: number): number {
    // 简化数组 0 和 1 的数组
    const simpleNums = nums.map(num => num % 2);

    // 构建前缀和数组 
    const preSums = [0];
    for (let num of simpleNums) {
        preSums.push(preSums[preSums.length - 1] + num);
    }

    // 两数之差等于 k，S(l, r) = k = S(r) - S(l - 1)
    const counts = [preSums[0]];
    let ans = 0;
    for (let preSum of preSums) {
        ans += counts[preSum - k] || 0;
        counts[preSum] = (counts[preSum] || 0) + 1;
    }

    return ans;
};
// @lc code=end

