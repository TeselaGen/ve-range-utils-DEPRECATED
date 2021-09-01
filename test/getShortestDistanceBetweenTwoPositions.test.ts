import * as assert from "assert";
import { getShortestDistanceBetweenTwoPositions } from "../src";
describe('getShortestDistanceBetweenTwoPositions', function () {
	it('should return the correct length for positions that cross the origin', function (done) {
		var length = getShortestDistanceBetweenTwoPositions(9,0,10)
		assert(length === 1)
		done()
	});
	it('should return the correct length for ranges that do not cross the origin', function (done) {
		var length = getShortestDistanceBetweenTwoPositions(4,6,10)
		assert(length === 2)
		done()
	});
});
