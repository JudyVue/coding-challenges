'use strict';

const SLL = require('../linked-list/linked-list').SLL;


const expect = require('chai').expect;
describe('testing SLL constructor', () => {
    it('should instantiate a new SLL with size 0 and head null',() => {
        let sll = new SLL();
        expect(sll.size).to.equal(0);
        expect(sll.head).to.equal(null);
    })
})

describe('testing SLL add method', () => {
    it('should return the new list with newly added node and update size',() => {
        let sll = new SLL();
        sll.add(1);
        expect(sll.size).to.equal(1);
        expect(sll.head.data).to.equal(1);
        expect(sll.head.next).to.equal(null);
    })
})

describe('testing SLL nthFromLast method', () => {
    it('should return the node at nth from last position of SLL with array of numbers', () => {
        let sll = new SLL();
        for (let i = 0; i < 10; i++) {
            sll.add(i);
        }

        expect(sll.nthFromLast(1).data).to.equal(9);
        expect(sll.nthFromLast(1).next).to.equal(null);
        
        expect(sll.nthFromLast(2).data).to.equal(8);
        expect(sll.nthFromLast(3).data).to.equal(7);
    })

    it('should return the node at nth from last position using arbitrary string', () => {
        let foo = 'foobazbar';
        let sll = new SLL();
        for (let i = 0; i < foo.length; i++) {
            sll.add(foo[i]);
        }
        expect(sll.nthFromLast(0).data).to.equal('r');
        expect(sll.nthFromLast(1).data).to.equal('r');
        expect(sll.nthFromLast(2).data).to.equal('a');
        expect(sll.nthFromLast(9).data).to.equal('f')
    })

    it('should err out if given a position bigger than SLL size', () => {
        let sll = new SLL();
        sll.add(1);
        expect(sll.nthFromLast.bind(sll, 2)).to.throw();
        expect(sll.nthFromLast.bind(sll, 3)).to.throw();

    })
})