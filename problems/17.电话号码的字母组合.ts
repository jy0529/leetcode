/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    const ans: string[] = [];

    if (digits.length === 0) return ans;

    const alphabet = new Map<string, string>();
    alphabet.set('2', 'abc');
    alphabet.set('3', 'def');
    alphabet.set('4', 'ghi');
    alphabet.set('5', 'jkl');
    alphabet.set('6', 'mno');
    alphabet.set('7', 'pqrs');
    alphabet.set('8', 'tuv');
    alphabet.set('9', 'wxyz');

    function dfs(index: number, str: string) {
        if (index === digits.length) {
            ans.push(str);
            return ;
        }
        // @ts-ignore
        for(let char of alphabet.get(digits[index])) {
            const temp = str;
            str += char;
            dfs(index + 1, str);
            str = temp;
        }
    }

    dfs(0, '');
    return ans;
};
// @lc code=end

