/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right--;
        }
    }
    return nums[right];
};
// @lc code=end

