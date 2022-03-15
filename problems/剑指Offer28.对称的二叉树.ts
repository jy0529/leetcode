/**
 * @link https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 */
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

// 1. 先求出二叉树的镜像，然后对比前序
// 2. 递归的时候判断是否对称
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    return helper(root.left, root.right);
};

function helper(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) {
        return true;
    } else if (left === null || right === null) {
        return false;
    }
    if (left.val === right.val) {
        return helper(left.left, right.right) && helper(left.right, right.left); 
    } else {
        return false;
    }
}