'use strict';

module.exports = exports = {};

class Queue {
    constructor() {
        this.storage = [];
        // return this.storage;
    }

    dequeue() {
        this.storage.shift();
    }

    enqueue(data){
        this.storage.unshift(data);
    }

    getSize() {
        return this.storage.length;
    }

}

exports.MyQueue = class {
    constructor(...data) {
        this.data = data;
    }

    _utilStacks(stack1, stack2, queue) {
        while (stack1.length) {
            let first = stack1.pop();
            stack2.push(first);
            queue.enqueue(stack2.pop());
        }
    }

    setNewQueue() {
        //for purposes of this exercise, I am using built-in Javascript Arrays as "stacks" and only utilizing their "push" and "pop" methods;
        let stack1 = this.data;
        let stack2 = [];
        let q = new Queue();

        this._utilStacks(stack1, stack2, q)


        return q;
    }


    

}

