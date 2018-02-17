'use strict';

//4.	Write a program that outputs all possibilities to put the operators ‘+’, ‘-’, or nothing between the numbers 1,2,...,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.

module.exports = exports =  {};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
exports.getCombinations = (str, targetSum, accSum, range) => {
    if (!range.length) {
        // console.log(str)
        if (accSum === targetSum)  console.log(str);
    } else {
        let first = range[0];
        let remaining = range.slice(1);
    
        // console.log('FIRST', first, 'REMANING', remaining)
        if (str !== '') {
            let nextPlusSum = accSum + first;
            let nextMinusSum = accSum - first
            getCombinations(`${str}+${first}`, targetSum, nextPlusSum, remaining);
            getCombinations(`${str}-${first}`, targetSum, nextMinusSum, remaining)
        } else {
            getCombinations(`${first}`, targetSum, first, remaining);
        }
        
        if (remaining.length) {
            let nextConcat = first * 10 + remaining[0];
            getCombinations(`${first}`, targetSum, nextConcat, remaining.slice(1))
        }
        

    }
    
}

exports.getCombinations('', 100, 0, nums);