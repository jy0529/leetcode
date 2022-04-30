/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

/**
 * Solutions
 * 1. bubble sort O(N * N)
 * 2. 记录 0 的位置 loop, 遇到下一个0再交换，直到最后回填 O(N)
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
    let zeroStart = -1;
    let i = 0;

    while(i < nums.length) {
        const num = nums[i];
        if (num === 0) {
            if (zeroStart === -1) {
                zeroStart = i;
            }
        } else {
            if (zeroStart !== -1) {
                nums[zeroStart] = num;
                nums[i] = 0;
                zeroStart++;
            }
        }
        i++;
    }
};
// @lc code=end

