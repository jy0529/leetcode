/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */
/**
 * Solutions
 * 1. 暴力法 O(N * N)
 * 2. 单调栈 O(N) O(N)
 */
// @lc code=start
function largestRectangleArea(heights: number[]): number {
    let stack = [];
    let maxArea = -Infinity;
    for(let i = 0; i < heights.length; i++) {
        while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const height = heights[stack.pop()];
            while(stack.length > 0 && heights[stack[stack.length - 1]] === height) {
                stack.pop(); 
            }
            let width:number;
            if (stack.length === 0) {
                width = i;
            } else {
                width = i - (stack[stack.length - 1]) - 1;
            }
            maxArea = Math.max(width * height, maxArea);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const height = heights[stack.pop()];
        while(stack.length > 0 && heights[stack[stack.length - 1]] === height) {
            stack.pop(); 
        }
        let width:number;
        if (stack.length === 0) {
            width = heights.length;
        } else {
            width = heights.length - (stack[stack.length - 1]) - 1;
        }
        maxArea = Math.max(width * height, maxArea);
    }

    return maxArea;

};
// @lc code=end

