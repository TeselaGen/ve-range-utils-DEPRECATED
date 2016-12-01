var assign = require('lodash/object/assign');
var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
module.exports = function normalizeRange(range, sequenceLength) {
    return assign({}, range, {
        start: normalizePositionByRangeLength(range.start, sequenceLength),
        end: normalizePositionByRangeLength(range.end, sequenceLength),
    })
};
