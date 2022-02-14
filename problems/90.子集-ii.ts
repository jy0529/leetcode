/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    let ans: number[][] = [[]];
    nums.sort();
    let hash: Map<string, boolean> = new Map<string, boolean>();
    helper(nums, 0, ans, hash);
    return ans;    
};

function helper(nums: number[], i: number, ans: number[][], hash: Map<string, boolean>) {
    if (i === nums.length) {
        return;
    }

    let length = ans.length;
    for(let j = 0; j < length;j++) {
        let value = ans[j].concat(nums[i]);
        let key = value.join('-') || '-';
        if (hash.get(key) !== true) {
            ans.push(value);
            hash.set(key, true);
        }
    }
    helper(nums, i + 1, ans, hash);
}
// @lc code=end

