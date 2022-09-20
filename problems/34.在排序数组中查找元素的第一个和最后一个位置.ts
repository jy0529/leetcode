/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    const ans: number[] = [];

    // 找 第一个 >= target 的值
    // 找 最后一个 <= target 的值

    let left = 0, right = nums.length;
    while(left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    ans.push(right);

    left = -1, right = nums.length - 1;
    while(left < right) {
        let mid = (left + right + 1) >> 1;
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    ans.push(right);

    if (ans[0] > ans[1]) return [-1, -1];

    return ans;
};
// @lc code=end

