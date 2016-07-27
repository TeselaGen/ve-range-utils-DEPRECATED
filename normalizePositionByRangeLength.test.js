var expect = require('chai').expect
var normalizePositionByRangeLength = require('./normalizePositionByRangeLength')
describe('normalizePositionByRangeLength', function() {
    it('should normalize positions by their max length, assuming 0-based inclusive indices', function() {
        expect(normalizePositionByRangeLength(10,9)).to.equal(1)
        expect(normalizePositionByRangeLength(9,9)).to.equal(0)
    })
    it('should handle isInBetweenPositions === true being passed in ', function() {
      expect(normalizePositionByRangeLength(9,9,true)).to.equal(9)
    })
    it('should not do anything if it does not have to', function() {
        expect(normalizePositionByRangeLength(10,99)).to.equal(10)
    })
})
