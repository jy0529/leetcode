/**
 * @link https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 */

// 1. 循环遍历下一个数字不是 +1 的话，就返回 当前数字 + 1 O(N)
// 2. 二分 O(logN)
function missingNumber(nums: number[]): number {
    let i = 0, j = nums.length - 1;
    while(i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] === mid) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return i;
};