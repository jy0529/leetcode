/**
 * @link https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 */

// 1. 暴力循环 O(N)
// 2. 二分查找 平均(O logN), 最坏 O(N)
function minArray(numbers: number[]): number {
    let l = 0;
    let r = numbers.length - 1;
    while(l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (numbers[mid] > numbers[r]) {
            l = mid + 1;
        } else if (numbers[mid] < numbers[r]) {
            r = mid;
        } else {
            r--;
        }
    }
    return numbers[l];
};