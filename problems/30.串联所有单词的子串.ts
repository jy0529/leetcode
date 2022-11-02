/*
 * @lc app=leetcode.cn id=30 lang=typescript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
    let wordsLength = 0;
    for(let word of words) {
        wordsLength += word.length;
    }

    let ans: number[] = [];
    for(let i = 0;(i + wordsLength) <= s.length;i++) {
        const str = s.substring(i, i + wordsLength);
        if (match(str, words)) {
            ans.push(i);
        }
    }
    return ans;
};

function match(str: string, words: string[]): boolean {
    const wordLength = words[0].length;
    // 两个 map 的比较
    let strMap = {};
    let wordsMap = {};
    for(let word of words) {
        if (wordsMap[word]) {
            wordsMap[word]++;
        } else {
            wordsMap[word] = 1;
        }
    }
    for(let i = 0;(i + wordLength) <= str.length;i += wordLength) {
        const key = str.substring(i, i + wordLength);
        if (strMap[key]) {
            strMap[key]++;
        } else {
            strMap[key] = 1;        
        }
    }
    return isSameMap(strMap, wordsMap);
}

function isSameMap(map1: Object, map2: Object): boolean {
    for(let k in map1) {
        if (map1.hasOwnProperty(k)) {
            if (map2[k] !== map1[k]) {
                return false;
            }
        }
    }
    for(let k in map2) {
        if (map2.hasOwnProperty(k)) {
            if (map1[k] !== map2[k]) {
                return false;
            }
        }
    }
    return true;
}

// @lc code=end

