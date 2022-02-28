/**
 * @link https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

// 1. 哈希表， 时间复杂度 O(N) 空间复杂度 O(N)
// 2. 排序 + 利用数组下标，时间复杂度 O(nlogn), 空间复杂度 O(1)
// 3. 原地交换, 时间复杂度 O(N), 空间复杂度 O(1)
function findRepeatNumber(nums: number[]): number {
    let i = 0;
    while(i < nums.length) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        if (nums[i] === nums[nums[i]]) {
            return nums[i];
        }
        let temp = nums[i];
        nums[i] = nums[temp];
        nums[temp] = temp;
    }
    return -1;
};