/**
 * @link https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// 循环复制
/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    let cur = head;
    // 1. 建立新节点与旧节点的关系 old.next = new
    while(cur) {
        let next = cur.next;
        cur.next = new Node(cur.val, cur.next, undefined);
        cur = next;
    }
    // 2. 将 random 指针指向 cur.next
    cur = head;
    while(cur) {
        let random = cur.random;
        if (random === null) {
            cur.next.random = null;
        } else {
            cur.next.random = random.next;
        }
        cur = cur.next.next;
    }
    // 3. 分离新旧链表
    cur = head.next;
    let ans = head.next;
    let pre = head;
    while(cur.next) {
        pre.next = cur.next;
        cur.next = cur.next.next;
        pre = pre.next;
        cur = cur.next;
    }
    pre.next = null;
    return ans;
};