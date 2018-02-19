//const tap = require('tap');
//tap.mochaGlobals();

const adjustRangeToRotation = require('./adjustRangeToRotation.js');
const assert = require('assert');
describe('adjustRangeToRotation', function() {
    it('shifts start and end if rotating before non circular range', function() {
        //0123456789
        //atgcatgccc
        // ff
        // 
        assert.deepEqual(adjustRangeToRotation({
            start: 1,
            end: 2
        }, 1, 10), {
            start: 0,
            end: 1
        });
        assert.deepEqual(adjustRangeToRotation({
            start: 1,
            end: 2
        }, 2, 10), {
            start: 9,
            end: 0
        });
        assert.deepEqual(adjustRangeToRotation({
            start: 1,
            end: 2
        }, 3, 10), {
            start: 8,
            end: 9
        });
    });
    
});