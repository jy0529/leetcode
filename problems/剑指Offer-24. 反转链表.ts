/**
 * @link https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */

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

// 1. 用一个数组存链表每一项的值，然后从数组末端 new ListNode 构造 O(N) 时间复杂度 O(N) 空间复杂度
// 2. 递归 last = node.next -> reverse(node.next) -> last.next = node; O(N) 时间复杂度 O(N) 空间复杂度
// 3. 迭代
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    let prevNode = null;
    let current = head;
    while(current !== null) {
        const nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    return prevNode;
};