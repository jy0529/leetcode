/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

// queue，每层节点放在上一层节点的前面
function levelOrderBottom(root: TreeNode | null): number[][] {
    let queue = [root];
    let level = [];
    let ans = [];
    if (root === null) {
        return ans;
    }

    ans = [[root.val]];

    while(queue.length > 0 || level.length > 0) {
        if (level.length > 0 && queue.length === 0) {
            queue = queue.concat(level);
            ans.unshift(level.map(item => item.val));
            level = [];
        }
        let node = queue.shift();
        if (node.left) {
            level.push(node.left);
        }
        if (node.right) {
            level.push(node.right);
        }
    }
    return ans;
};
// @lc code=end

