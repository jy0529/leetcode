/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

/**
 * Solutions
 * 1. 三重循环 O(N * N * N) O(1)
 * 2. 二重循环 + 双指针 O(N * N)
 * 
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    let i = 0;
    const ans:number[][] = [];
    for(i = 0;i < nums.length;i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let first = nums[i];
        let thirdIdx = nums.length - 1;
        for(let j = i + 1;j < nums.length && thirdIdx > j;j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;
            let second = nums[j];
            while(thirdIdx > j && first + second + nums[thirdIdx] > 0) {
                thirdIdx--;
            }
            if (j === thirdIdx) {
                break;
            }
            if (first + second + nums[thirdIdx] === 0) {
                ans.push([first, second, nums[thirdIdx]]);
            }
        }
    }

    return ans;
};
// @lc code=end

