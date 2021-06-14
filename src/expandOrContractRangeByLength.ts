var {clone} = require('lodash');
var normalizeRange = require('./normalizeRange');
export function expandOrContractRangeByLength(range, shiftBy, shiftStart, sequenceLength) {
    var rangeToReturn = clone(range)
    if (shiftStart) {
    	rangeToReturn.start -=shiftBy
    } else {
    	rangeToReturn.end +=shiftBy
    }
    return normalizeRange(rangeToReturn,sequenceLength)
}