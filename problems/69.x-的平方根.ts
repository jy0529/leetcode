/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
    let left = 0, right = x;
    while(left < right) {
        const mid = (left + right + 1) >> 1;
        if (mid <= x / mid) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return right;
};
// @lc code=end

