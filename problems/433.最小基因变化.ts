/*
 * @lc app=leetcode.cn id=433 lang=typescript
 *
 * [433] 最小基因变化
 */

// @lc code=start
function minMutation(start: string, end: string, bank: string[]): number {
    const genes = ['A', 'C', 'G', 'T'];
    const depths: Map<string, number> = new Map<string, number>();
    const queue: string[] = [start];
    const hashBank: Set<string> = new Set(bank);

    if (hashBank.has(end) === false) return -1;

    depths.set(start, 0)
    while(queue.length > 0) {
        // @ts-ignore
        let str: string = queue.shift();
        for(let i = 0;i < 8;i++) {
            for(let j = 0;j < 4;j++) {
                if (str[i] !== genes[j]) {
                    let ns = replaceStrByIndex(str, i, genes[j]);
                    if (hashBank.has(ns) === false) continue;
                    if (depths.get(ns) !== undefined) continue;
                    // @ts-ignore
                    depths.set(ns, depths.get(str) + 1);
                    queue.push(ns);
                    if (ns === end) {
                        // @ts-ignore
                        return depths.get(ns)
                    }
                }
            }
        }
    }
    return -1;
};

function replaceStrByIndex(str: string, i: number, r: string): string {
    let arr = str.split('');
    arr[i] = r;
    return arr.join('');
}

// @lc code=end

