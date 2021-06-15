import { getRangeLength } from "../src";
import { generateRandomRange } from "../src";
import { expect } from "chai";

describe('generateRandomRange', function () {
	it('should generate random ranges between a start and end', function () {
		for (var i = 0; i < 1000; i++) {
			var range = generateRandomRange(0, 10)
			expect(range.start).to.be.below(11)
			expect(range.end).to.be.below(11)
		}
	});

	it('should generate random ranges between a start and end and with length less than maxLength', function () {
		for (var i = 0; i < 1000; i++) {
			var range = generateRandomRange(0, 10, 5)
			var length = getRangeLength(range, 10)
			if (length > -1) {
				expect(length).to.be.below(6)
			}
		}
	});
});