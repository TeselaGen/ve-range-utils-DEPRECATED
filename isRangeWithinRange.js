//TNR: THIS METHOD ONLY WORKS FOR COMPARING 0-BASED RANGES!!!!!!
var trimRangeByAnotherRange = require('./trimRangeByAnotherRange')
module.exports = function isRangeWithinRange(range1, range2, maxLength) {
    var ranges = trimRangeByAnotherRange(range1, range2, maxLength)
    return!ranges
}
