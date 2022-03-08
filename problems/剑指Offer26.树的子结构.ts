/**
 * @link https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
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

 function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if (A === null || B === null) {
        return false;
    }
    return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isSame(A: TreeNode | null, B: TreeNode | null): boolean {
    if (B === null) return true;
    if (A === null) return false;
    if (A.val === B.val) {
        return isSame(A.left, B.left) && isSame(A.right, B.right);
    } else {
        return false;
    }
}