/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
 /**
  * nums[i] <= nums[n - 1]
  * 
  * 4 5 6 7 0 1 2
  * 0 0 0 0 1 1 1
  * 
  * 满足条件单调性
  */
    let left = 0, right = nums.length - 1;

    while(left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] <= nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[right];
};
// @lc code=end

