/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function build(l1: number, r1: number, l2: number, r2: number) {
        if (l1 > r1) return null;
        // @ts-ignore
        const root = new TreeNode(preorder[l1]);
        let mid = l2;
        while(inorder[mid] !== root.val) mid++;
        root.left = build(l1 + 1, l1 + (mid - l2), l2, mid - 1);
        root.right = build(l1 + (mid - l2) + 1, r1, mid + 1, r2);
        return root;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end

