/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    /**
     * dp[i]: nums[0..i] 的最长子序列
     * dp[i] = Math.max(dp[0],......,dp[i - 1]) + 1, 其中比较的值都要比 nums[i] 小
     * return Math.max(dp[0 - nums.length - 1])
     */
    const dp = [1];
    let ans = dp[0];

    for(let i = 1;i < nums.length;i++) {
        const num = nums[i];
        let max = 0;
        for(let j = 0;j < i;j++) {
            if (nums[j] < num) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
        ans = Math.max(dp[i], ans);
    }

    return ans;
};
// @lc code=end

