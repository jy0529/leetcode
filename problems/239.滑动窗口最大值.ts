/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start

interface IHeap<T> {
    push(node: T);
    pop(): T;
    top(): T;
    empty(): boolean;
}

class Heap<T extends { val: number }> implements IHeap<T> {
    private heap: Array<T> = [];

    constructor() {
        this.heap.push({ val: -Infinity } as T);
    }

    push(node: T) {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    pop(): T{
        this.heap[1] = this.heap[this.heap.length - 1];
        const val = this.heap.pop();
        this.heapifyDown(1);
        return val as T;
    }

    top(): T {
        return this.heap[1];
    }

    empty(): boolean {
        return this.heap.length === 1;
    }

    private heapifyUp(nodeIndex: number) {
        while(nodeIndex > 1) {
            let parentIndex = Math.floor(nodeIndex / 2);
            if (this.heap[parentIndex].val < this.heap[nodeIndex].val) {
                this.swap(nodeIndex, parentIndex);
                nodeIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    private heapifyDown(nodeIndex: number) {
        let child = nodeIndex * 2;
        while(child < this.heap.length) {
            let other = child + 1;
            if (other < this.heap.length && this.heap[child].val < this.heap[other].val) {
                child = other;
            }
            const val: number = this.heap[nodeIndex].val;

            if (val < this.heap[child].val) {
                this.swap(child, nodeIndex);
                nodeIndex = child;
                child = nodeIndex * 2;
            } else {
                break;
            }
        }
    }

    private swap(n1: number, n2: number) {
        if (n1 === n2) return;
        [this.heap[n1], this.heap[n2]] = [this.heap[n2], this.heap[n1]];
    }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const heap = new Heap<{ val: number, index: number }>();
    const ans: number[] = [];
    for(let i = 0;i < nums.length;i++) {
        heap.push({ val: nums[i], index: i });
        // [i-k+1, i]
        if (i >= k - 1) {
            while(heap.top() && heap.top().index <= i - k) heap.pop();
            ans.push(heap.top().val);
        }
    }
    return ans;
};
// @lc code=end

