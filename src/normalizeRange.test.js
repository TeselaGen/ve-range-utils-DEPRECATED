var normalizeRange = require('./normalizeRange');
var expect = require('chai').expect
describe('normalizeRange', function () {
    const normalizedRange = normalizeRange({start: 0, end: -1},10)
    expect(normalizedRange.start).to.equal(0)
    expect(normalizedRange.end).to.equal(9)
});