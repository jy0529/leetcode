/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let ans = null;
	dfs(root);
    function dfs(root: TreeNode): boolean[] {
        if (root === null) return [false, false];
        const leftResult = dfs(root.left);
        const rightResult = dfs(root.right);
        const left = leftResult[0] || rightResult[0] || root === p;
        const right = leftResult[1] || rightResult[1] || root === q;
        if (left && right && ans === null) ans = root;
        return [left, right];
    }
    return ans;
};
// @lc code=end

