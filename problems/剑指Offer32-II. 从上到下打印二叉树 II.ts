/**
 * @link https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
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

 function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }

    const queue = [{ level: 0, node: root }];
    const ans = [];
    let currentLevel = 0;
    let levelNodes = [];

    while(queue.length > 0) {
        const { level, node } = queue.shift();
        if (currentLevel === level) {
            levelNodes.push(node.val);
        } else {
            ans.push(levelNodes);
            levelNodes = [node.val];
            currentLevel = level;
        }
        if (node.left) {
            queue.push({ level: currentLevel + 1, node: node.left });
        }
        if (node.right) {
            queue.push({ level: currentLevel + 1, node: node.right });
        }
    }
    if (levelNodes.length > 0) {
        ans.push(levelNodes);
        levelNodes = [];
    }

    return ans;
};