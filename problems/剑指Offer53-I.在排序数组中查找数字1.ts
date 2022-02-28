/**
 * @link https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */

// 1. 找出 target 初始位置，然后不断判断后面计数即可 O(N)
// 2. 二分查找 夹逼法
function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            if (nums[low] === nums[high]) {
                return high - low + 1;
            }
            if (target < nums[high]) {
                high--;
            }
            if (target > nums[low]) {
                low++;
            }
        }
    }
    return 0;
}; 