/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 */
// O(1) 解法是数根的概念，9的倍数数根是9，0的数根是0，其余都是mod 9
// @lc code=start
function addDigits(num: number): number {
    if (num >= 0 && num <= 9) return num;
    while(num >= 10) {
        num = calc(num);
    }
    return num;
};

function calc(num: number): number  {
    let sum = 0;
    while(num > 0) {
        let bit = num % 10;
        sum += bit;
        num = Math.trunc(num / 10);
    }
    return sum;
}

// @lc code=end

