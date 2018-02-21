'use strict';

const getCombinations = require('../combinations/combinations').getCombinations;
const expect = require('chai').expect;

const comparison = [ 
'1+2+3-4+5+6+78+9',
'1+2+34-5+67-8+9',
'1+23-4+5+6+78-9',
'1+23-4+56+7+8+9',
'12+3+4+5-6-7+89',
'12+3-4+5+67+8+9',
'12-3-4+5-6+7+89',
'123+4-5+67-89',
'123-4-5-6-7+8-9',
'123+45-67+8-9',
'123-45-67+89' ]



describe('testing getCombinations', () => {
    it('should output the 11 combos that equal 100', () => {
        let combos = getCombinations();
        expect(combos).to.deep.equal(comparison);
    })
})