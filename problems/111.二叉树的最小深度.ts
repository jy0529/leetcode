/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left && root.right) {
        let leftDepth = minDepth(root.left);
        let rightDepth = minDepth(root.right);
        return Math.min(leftDepth, rightDepth) + 1;
    } else if (root.left) {
        return minDepth(root.left) + 1;
    } else {
        return minDepth(root.right) + 1;
    }
};


// @lc code=end

