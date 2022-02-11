/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
function countSegments(s: string): number {
    let flag:number = -1;
    let count:number = 0;

    for(let i = 0; i < s.length;i++) {
        if (s.charAt(i) === ' ') {
            if (flag !== -1) {
                count++;
                flag = -1;
            }
        } else {
            flag = 0;
        }
    }

    if (flag === 0) {
        count++;
    }

    return count;
};
// @lc code=end

