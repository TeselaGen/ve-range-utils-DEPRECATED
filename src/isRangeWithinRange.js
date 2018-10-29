//TNR: THIS METHOD ONLY WORKS FOR COMPARING 0-BASED RANGES!!!!!!
var trimRangeByAnotherRange = require('./trimRangeByAnotherRange')
module.exports = function isRangeWithinRange(rangeToCheck, containingRange, maxLength) {
    var ranges = trimRangeByAnotherRange(rangeToCheck, containingRange, maxLength)
    return!ranges
}
