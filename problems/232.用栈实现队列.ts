/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    inStack: Array<number>;
    outStack: Array<number>;
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        if (this.outStack.length > 0) {
            return this.outStack.pop();
        } else {
            this._toOutStack();
        }
        return this.outStack.pop();
    }

    peek(): number {
        const num: number = this.pop();
        this.outStack.push(num);
        return num;
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    _toOutStack() {
        while(this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

