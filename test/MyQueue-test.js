const expect = require('chai').expect;
const MyQueue = require('../stacks-queues/stacks-queues').MyQueue;


describe('testing MyQueue class', () => {
    describe('testing that setNewQueue works', () => {
        it('should return the new queue we just set', () => { 
            let mq = new MyQueue().setNewQueue(1, 2, 3, 4)
            expect(mq).to.deep.equal([1, 2, 3, 4])
        })
    })

    describe('testing that DEQUEUE works', () => {
        it('should return the value we are dequeuing', () => { 
            let mq = new MyQueue();
            mq.setNewQueue(1, 2, 3, 4);
            for (let i = 1; i <= 4; i++) {
                expect(mq.dequeueMyQueue()).to.equal(i);
            }
        })
    })
})