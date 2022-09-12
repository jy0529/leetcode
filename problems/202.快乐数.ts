/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
    let result = n;
    let cache = {};
    cache[result] = true;
    while(result !== 1) {
        result = calc(result);
        if (cache[result] === true) return false;
        cache[result] = true;
    }
    return true;
};

function calc(n: number): number {
    let sum = 0;
    while(n > 0) {
        let bit = n % 10;
        sum += bit * bit;
        n = Math.trunc(n / 10);
    }
    return sum;
}


// @lc code=end

