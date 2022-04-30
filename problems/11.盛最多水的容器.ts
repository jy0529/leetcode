/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let l = 0, r = height.length - 1;
    let max = 0;

    while(l < r) {
        max = height[l] < height[r] ?
            Math.max(max, (r - l) * Math.min(height[l++], height[r])) :
            Math.max(max, (r - l) * Math.min(height[l], height[r--]));
    }
    return max;
};
// @lc code=end

