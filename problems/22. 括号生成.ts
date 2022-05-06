function generateParenthesis(n: number): string[] {
    const ans: string[] = [];
    const allParens = 2 * n;
    function helper(str, leftParenCount, rightParenCount) {
        if (rightParenCount > leftParenCount || leftParenCount > n) {
            return;
        }
        if (leftParenCount + rightParenCount === allParens) {
            ans.push(str);
        }
        helper(str + '(', leftParenCount + 1, rightParenCount);
        helper(str + ')', leftParenCount, rightParenCount + 1);
    }

    helper('', 0, 0);
    return ans;
};