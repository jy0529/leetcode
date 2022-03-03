/**
 * @link https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 */

 function firstUniqChar(s: string): string {
    let hashmap: Map<string, boolean> = new Map();
    for(let i = 0;i < s.length;i++) {
        const key = s.charAt(i);
        hashmap.set(key, hashmap.has(key) ? false : true);
    }
    if (hashmap.size === 0) {
        return ' ';
    }
    
    for(let [key, value] of hashmap.entries()) {
        if (value === true) {
            return key;
        }
    }
    
    return ' ';
};