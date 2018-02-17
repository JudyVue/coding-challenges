'use strict';

const expect = require('chai').expect;

const BST = require('../bst/bst').BST;


describe('testing BST', () => {
    describe('testing that we can instantiate a new BST', () => {
        it('should return a new BST instance', () => {
            let bst = new BST(10);
            expect(bst.data).to.equal(10);
            expect(bst.left).to.equal(null);
            expect(bst.right).to.equal(null);
        })
    })
    describe('testing that we can add values to BST', () => {
        it('should return a new BST with more values', () => {
            let bst = new BST(50);
            const testNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            for (let i = 0; i < testNums.length; i++) {
                bst.add(testNums[i]);
            }
            console.log(bst)
        })
    })

    describe('testing isBalanced method', () => {
        it.only('should check if the tree is balanced', () => {
            let balancedBST = new BST(10);
            const balancedNums = [9, 8, 11]
            for (let i = 0; i < balancedNums.length; i++) {
                balancedBST.add(balancedNums[i]);
            }

            let unbalancedBST = new BST(50);
            const testNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            for (let i = 0; i < testNums.length; i++) {
                unbalancedBST.add(testNums[i]);
            }
            expect(balancedBST.isBalanced()).to.equal(true);
            expect(unbalancedBST.isBalanced()).to.equal(false);
        })
    })
})