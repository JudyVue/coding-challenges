'use strict';

//4.	Write a program that outputs all possibilities to put the operators ‘+’, ‘-’, or nothing between the numbers 1,2,...,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.


//We have three branches. One branch goes through addition, the second branch goes through subtraction, the third branch goes through concatenation. 

//The outer call cannot resolve until the inner function resolves

//function foo() {
    //first stuff
    //second stuff
//     foo(); **this inner recursive function must complete first before the outer recurisve function completes, this is on top of the stack and needs to resolve first and get popped off the stack before moving down to other invoked recursive functions
// }

module.exports = exports =  {};

const storage = [];

const _getCombinations = (str, accSum, ...input) => {
    if (!input.length) {
        if (accSum === 100) {
            console.log(str);
            storage.push(str);
        }
    } else {
        const [first, ...remaining] = input;

        if (str !== '') {
            _getCombinations(`${str}+${first}`, accSum + first, ...remaining);

            _getCombinations(`${str}-${first}`, accSum - first, ...remaining);
        } else {
            _getCombinations(`${first}`, first, ...remaining);
        }

        if (remaining.length) {
            const [next, ...nextRemaining] = remaining;

            _getCombinations(str, accSum, first * 10 + next, ...nextRemaining);
         }
    }
}

exports.getCombinations = () => {
    _getCombinations('', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    return storage;
}