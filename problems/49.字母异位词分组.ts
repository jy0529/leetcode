/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */
/**
 * 1. 暴力法 O(N * N) O(N)
 * 2. 排序 O(N * K * logK) O(N)
 * 3. 计数法
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const countMap = {};

    for(let i = 0;i < strs.length;i++) {
        let sum = 1;
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
        for(let j = 0;j < strs[i].length;j++) {
            sum *= primes[strs[i].charCodeAt(j) - 97];
        }
        if (countMap[sum] === undefined) {
            countMap[sum] = [strs[i]];
        } else {
            countMap[sum].push(strs[i]);
        }
    }

    return Object.values(countMap);
};
// @lc code=end

