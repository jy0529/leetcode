/*
 * @lc app=leetcode.cn id=645 lang=typescript
 *
 * [645] 错误的集合
 */

// 1. hash
// 2. 数学
// @lc code=start
function findErrorNums(nums: number[]): number[] {
    // 1. hash
    // const records = new Array(nums.length).fill(-1).map((item, i) => i + 1);
    // let ans = [];
    // for(let i = 0;i < nums.length;i++) {
    //     let num = nums[i];
    //     if (records[num - 1] === undefined) {
    //         ans.push(num);
    //     } else {
    //         records[num - 1] = undefined;
    //     }
    // }
    // ans.push(records.filter(item => item !== undefined)[0]);
    // return ans;

    // 2. 数学
    const orderArray = new Array(nums.length).fill(-1).map((item, i) => i + 1)
    const sum = (arr) => arr.reduce((acc, item) => acc + item);
    const all = sum(orderArray);
    const setSum = sum([...new Set(nums)]);
    const lostNum = all - setSum;
    const diff = all - sum(nums);
    return [lostNum - diff, lostNum];
};
// @lc code=end

