/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// 排序 O(nlogn) O(1)
// 哈希表 O(N) O(N)

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const mapping = {};
    
    for(let i = 0;i < s.length;i++) {
        mapping[s[i]] = (mapping[s[i]] || 0) + 1;
    }
    for(let i = 0;i < t.length;i++) {
        if (mapping[t[i]] > 0) {
            mapping[t[i]]--;
        } else {
            return false;
        }
    }
    return Object.values(mapping).every(count => count === 0);
};
// @lc code=end

