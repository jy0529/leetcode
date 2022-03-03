/**
 * @link https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    if (matrix.length === 0) {
        return false;
    }

    const n = matrix.length - 1;
    const m = matrix[0].length - 1;

    if (m === -1) {
        return false;
    }

    let i = 0;
    let j = m;
    while(i <= n && j >= 0) {
        let value = matrix[i][j];
        if (target > value) {
            i = i + 1;
        } else if (target < value) {
            j = j - 1;
        } else {
            return true;
        }
    }
    return false;
};