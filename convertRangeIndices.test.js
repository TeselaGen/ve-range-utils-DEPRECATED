var convertRangeIndices = require('./convertRangeIndices')
var assert = require('assert');
describe('convertRangeIndices', function () {
	it('should correctly convert various types of ranges', function (done) {
		assert(convertRangeIndices({start: 9,end:0},{inclusive1BasedStart: true}), {start: 8,end: 0})
		assert(convertRangeIndices({start: 9,end:0},{inclusive1BasedStart: true}, {inclusive1BasedEnd: true}), {start: 8,end: 1})
		assert(convertRangeIndices({start: 9,end:0},{inclusive1BasedEnd: true}, {inclusive1BasedEnd: true}), {start: 9,end: 0})
		assert(convertRangeIndices({start: 4,end:5},{inclusive1BasedEnd: true}, {inclusive1BasedStart: true}), {start: 5,end: 4})
		done()
	});
})
