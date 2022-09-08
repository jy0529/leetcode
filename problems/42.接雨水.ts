/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
interface Rect {
    width: number;
    height: number;
}
function trap(heights: number[]): number {
    let ans = 0;
    const stack: Array<Rect> = [];
    for(let height of heights) {
        let accumulatedWidth = 0;
        // @ts-ignore
        while(stack.length > 0 && stack[stack.length - 1].height <= height) {
            const top = stack[stack.length - 1];
            const bottom = top.height;
            accumulatedWidth += top.width;
            stack.pop();
            if (stack.length === 0) continue;
            const up = Math.min(stack[stack.length - 1].height, height);
            ans += accumulatedWidth * (up - bottom);
        }
        stack.push({
            width: accumulatedWidth + 1,
            height
        });
    }
    return ans;
};
// @lc code=end

