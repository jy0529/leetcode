// @link https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
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
	let ans;
    function dfs(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): boolean {
        if (root === null) {
            return false;
        }
        let l = dfs(root.left, p, q);
        let r = dfs(root.right, p, q);
        if (l && r || (root.val === p.val || root.val === q.val) && (l || r)) {
            ans = root;
        }
        return (l || r) || root.val === p.val || root.val === q.val;
    }
    dfs(root, p, q);
    return ans;
};