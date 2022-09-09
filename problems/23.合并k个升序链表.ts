/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


class BinaryHeap {
    // @ts-ignore
    private heap: Array<ListNode> = [];

    constructor() {
        // @ts-ignore
        this.heap.push(new ListNode(0, null))
    }

    empty(): boolean {
        return this.heap.length === 1;
    }
    // @ts-ignore
    insert(node: ListNode): void {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    deleteMin(): void {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(1);
    }
    // @ts-ignore
    top(): ListNode {
        return this.heap[1];
    }

    private heapifyUp(p: number) {
        while(p > 1) {
            let parent = Math.floor(p / 2);
            if (this.heap[p].val < this.heap[parent].val) {
                this.swap(p, parent);
                p = parent;
            } else {
                break;
            }
        }
    }

    private heapifyDown(p: number) {
        let child: number = p * 2;
        while (child < this.heap.length) {
            let other = p * 2 + 1;
            if (other < this.heap.length && this.heap[other].val < this.heap[child].val) {
                child = other;
            }
            if (this.heap[child].val < this.heap[p].val ) {
                this.swap(child, p);
                p = child;
                child = p * 2;
            } else {
                break;
            }
        }
    }

    private swap(p: number, p1: number) {
        [this.heap[p], this.heap[p1]] = [this.heap[p1], this.heap[p]];
    }
}
// @ts-ignore
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const binaryHeap = new BinaryHeap();
    for(let node of lists) {
        if (node === null) continue;
        // @ts-ignore
        binaryHeap.insert(new ListNode(node.val, node.next));
    }
    // @ts-ignore
    let head: ListNode = new ListNode(0, null);
    // @ts-ignore
    let tail: ListNode = head;
    while(!binaryHeap.empty()) {
        let minNode = binaryHeap.top();
        binaryHeap.deleteMin();
        tail.next = minNode;
        tail = tail.next;
        let next = minNode.next;
        if (next !== null) {
            // @ts-ignore
            binaryHeap.insert(new ListNode(next.val, next.next))
        }
    }

    return head.next;
};
// @lc code=end

