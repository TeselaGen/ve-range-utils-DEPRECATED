var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
var provideInclusiveOptions = require('./provideInclusiveOptions')
module.exports = provideInclusiveOptions(invertRange)
function invertRange(range, rangeMax) {
    var start = range.end + 1;
    var end = range.start - 1;
    return {
        start: normalizePositionByRangeLength(start, rangeMax, false),
        end: normalizePositionByRangeLength(end, rangeMax, false),
    }
}
