/**
 * @link https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 */

function reverseLeftWords(s: string, n: number): string {
    return s.slice(n, s.length) + s.slice(0, n);
};