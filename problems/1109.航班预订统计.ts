/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
function corpFlightBookings(bookings: number[][], n: number): number[] {
    const deltas = new Array(n + 1).fill(0);

    for(let booking of bookings) {
        const [first, last, seats] = booking;
        deltas[first] += seats;
        deltas[last + 1] -= seats;
    }

    const preSums: number[] = [];
    for(let i = 1;i <= n; i++) {
        preSums.push((preSums[preSums.length - 1] || 0) + deltas[i]);
    }
    return preSums;
};
// @lc code=end

