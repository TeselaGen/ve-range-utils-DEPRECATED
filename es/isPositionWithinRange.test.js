var isPositionWithinRange = require('./isPositionWithinRange')
var expect = require('chai').expect

describe('isPositionWithinRange', function() {
    it('should correctly determine whether a position is within a range', function() {
        expect(isPositionWithinRange(1,{start: 1, end: 1})).to.equal(false)
        expect(isPositionWithinRange(0,{start: 1, end: 10})).to.equal(false)
        expect(isPositionWithinRange(1,{start: 0, end: 10})).to.equal(true)
        expect(isPositionWithinRange(11,{start: 1, end: 10})).to.equal(false)
        expect(isPositionWithinRange(0,{start: 0, end: 10})).to.equal(false)
        expect(isPositionWithinRange(10,{start: 0, end: 10})).to.equal(true)
        expect(isPositionWithinRange(10,{start: 10, end: 5})).to.equal(false)
        expect(isPositionWithinRange(11,{start: 10, end: 5})).to.equal(true)
        expect(isPositionWithinRange(4,{start: 10, end: 5})).to.equal(true)
        expect(isPositionWithinRange(5,{start: 10, end: 5})).to.equal(true)
        expect(isPositionWithinRange(6,{start: 10, end: 5})).to.equal(false)
    })
    it('should correctly determine whether a position is within a range when includeStartEdge/includeEndEdge is set to true', function() {
        expect(isPositionWithinRange(1,{start: 1, end: 1},11, true, true)).to.equal(true)
        expect(isPositionWithinRange(0,{start: 0, end: 10},11, true, true)).to.equal(true)
        
    })
})
