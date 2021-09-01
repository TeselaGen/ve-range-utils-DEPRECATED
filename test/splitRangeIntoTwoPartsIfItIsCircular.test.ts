
import { splitRangeIntoTwoPartsIfItIsCircular } from "../src";
import * as assert from "assert";

describe('splitRangeIntoTwoPartsIfItIsCircular', function () {
    it('returns an array with one range in it if the array is non-circular', function () {
        assert.deepStrictEqual(splitRangeIntoTwoPartsIfItIsCircular({ start: 0, end: 100 }, 1000), [{ start: 0, end: 100, type: 'beginningAndEnd' }]);
        assert.deepStrictEqual(splitRangeIntoTwoPartsIfItIsCircular({ start: 10, end: 909 }, 1000), [{ start: 10, end: 909, type: 'beginningAndEnd' }]);
    });
    it('returns an array with two ranges in it if the array is circular', function () {
        assert.deepStrictEqual(splitRangeIntoTwoPartsIfItIsCircular({ start: 110, end: 100 }, 1000), [{ start: 0, end: 100, type: 'end' }, { start: 110, end: 999, type: 'beginning' }]);
    });
});