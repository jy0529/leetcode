/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// 暴力 O(n * n)
// 滑动窗口 O(n)

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    let ans = Infinity;

    let i = 0, j = 0;
    let sum = 0;
    for(j = 0;j <= nums.length - 1;j++) {
        sum += nums[j];
        while (sum >= target) {
            ans = Math.min(j - i + 1, ans);
            sum -= nums[i];
            i++;
        }
    }

    return ans === Infinity ? 0 : ans;
};
// @lc code=end

