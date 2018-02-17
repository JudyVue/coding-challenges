const expect = require('chai').expect;
const MyQueue = require('../stacks-queues/stacks-queues').MyQueue;


describe.only('testing MyQueue class', () => {
    describe('testing instantiation of MyQueue class', () => {
        it('should return instance of MyQueue class', () => {
            let mq = new MyQueue(1, 2, 3, 4);
            console.log(mq)
            expect(mq.data).to.deep.equal([1, 2, 3, 4])
        })
    })

    describe('testing that setNewQueue returns a new Queue', () => {
        it('should return the new queue we just set', () => {
            let mq = new MyQueue(1, 2, 3, 4, 5).setNewQueue().storage;
            expect(mq.length).to.equal(5);
            expect(mq).to.deep.equal([1, 2, 3, 4, 5])
        })
    })
})