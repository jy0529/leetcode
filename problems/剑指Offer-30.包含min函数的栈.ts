/**
 * @link https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
 */
 class MinStack {
    _stack1: Array<number>;
    _stack2: Array<number>;
    constructor() {
        this._stack1 = [];
        this._stack2 = [Infinity];
    }

    push(x: number): void {
        this._stack1.push(x);
        if (x <= this._stack2[this._stack2.length - 1]) {
            this._stack2.push(x);
        }
    }

    pop(): void {
        const num = this._stack1.pop();
        if (num === this._stack2[this._stack2.length - 1]) {
            this._stack2.pop();
        }
    }

    top(): number {
        return this._stack1[this._stack1.length - 1];
    }

    min(): number {
        return this._stack2[this._stack2.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */