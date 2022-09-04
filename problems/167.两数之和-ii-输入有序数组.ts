/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    // 有序 双指针扫描
    let i = 0, j = numbers.length - 1;
    while(i < j) {
        const maybeTarget = numbers[i] + numbers[j];
        if (maybeTarget > target) {
            j--;
        } else if (maybeTarget < target) {
            i++;
        } else {
            return [i + 1, j + 1];
        }
    }
    return [];
};
// @lc code=end

