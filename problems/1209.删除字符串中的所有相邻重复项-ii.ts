/*
 * @lc app=leetcode.cn id=1209 lang=typescript
 *
 * [1209] 删除字符串中的所有相邻重复项 II
 */

// @lc code=start
function removeDuplicates(s: string, k: number): string {
    const stack: number[] = [];

    for(let i = 0;i < s.length;i++) {
        const val = s.charAt(i);
        if (stack.length && val === stack[stack.length - 1][0]) {
            // @ts-ignore
            stack[stack.length - 1] += val;
        } else {
            // @ts-ignore
            stack.push(val);
        }
        // @ts-ignore
        if (stack[stack.length - 1].length === k) {
            stack.pop();
        }
    }

    return stack.join('');
};
// @lc code=end

