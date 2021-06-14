var expandOrContractCircularRangeToPosition = require('./expandOrContractCircularRangeToPosition');
var expandOrContractNonCircularRangeToPosition = require('./expandOrContractNonCircularRangeToPosition');
export function expandOrContractRangeToPosition(range, position, maxLength) {
    if (range.start > range.end) {
        return expandOrContractCircularRangeToPosition(range, position, maxLength)
    } else {
        return expandOrContractNonCircularRangeToPosition(range, position, maxLength)
    }
}