/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
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

// 1. 按中序遍历，看数组是否包含另一个数组
// 2. 递归
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root === null && subRoot !== null || root !== null && subRoot === null) {
        return false;
    }
    if (root === null && subRoot === null) {
        return true;
    }

    if (root.val === subRoot.val) {
        if (same(root, subRoot) === true) {
            return true;
        } else {
            return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
        }
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
};

function same(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 !== null || node1 !== null && node2 === null) {
        return false;
    }
    if (node1 === null && node2 === null) {
        return true;
    }
    if (node1.val === node2.val) {
        return same(node1.left, node2.left) && same(node1.right, node2.right);
    } else {
        return false;
    }
}
// @lc code=end

