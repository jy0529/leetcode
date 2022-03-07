/**
 * @link https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
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
    const queue: TreeNode[] = [root];
    const ans: number[][] = [];
    
    let order = 0; // 0 左到右, 1 右到左
    while(queue.length > 0) {
        let level: number[] = [];
        const length = queue.length;
        for(let i = 0;i < length;i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            if (order === 0) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }
        }
        ans.push(level);
        order = order === 0 ? 1 : 0;
    }

    return ans;
};