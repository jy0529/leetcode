/**
 * @link https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */

function replaceSpace(s: string): string {
    let newString = '';
    for(let i = 0;i < s.length;i++) {
        let c = s.charAt(i);
        if (c === ' ') {
            newString = newString + '%20';
        } else {
            newString = newString + c;
        }
    }
    return newString;
};