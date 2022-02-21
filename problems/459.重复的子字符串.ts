/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// 1. 暴力法，把前一个非首个字符的序列记录下来，如遇下一个首个字符，开始匹配，用栈, 最后判断是否为空栈 O(N平方) O(N)
// 2. 间距法，O(N * K), 先找到首字符相邻的间距，然后不断匹配下一个字符，若下一个字符 + 间距 不相等，那就错误

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    return (s + s).slice(1, s.length * 2 - 1).includes(s);
};
// @lc code=end

