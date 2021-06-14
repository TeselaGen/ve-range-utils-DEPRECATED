const { assign } = require("lodash");
var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
export function translateRange(rangeToBeAdjusted, translateBy, rangeLength) {
    return assign({}, rangeToBeAdjusted, {
        start: normalizePositionByRangeLength(rangeToBeAdjusted.start + translateBy, rangeLength),
        end: normalizePositionByRangeLength(rangeToBeAdjusted.end + translateBy, rangeLength)
    });
};