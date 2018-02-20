'use strict';

module.exports = exports = {};

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    dequeue() {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

    enqueue(data){
        while (this.stack2.length) {
            this.stack1.push(stack.pop());
        }
        for (let i = 0; i < data.length; i++) {
            this.stack1.push(data[i]);
        }
        return this.stack1;
    }
}

exports.MyQueue = class {
    constructor() {
        this.queue;
    }
    setNewQueue(...data) {
        let q = new Queue();
        q.enqueue(data)
        this.queue = q;
        return this.queue.stack1;
    }

    dequeueMyQueue() {
        return this.queue.dequeue();
    }


    

}

