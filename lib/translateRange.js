"use strict";

var _require = require("lodash"),
    assign = _require.assign;

var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
module.exports = function translateRange(rangeToBeAdjusted, translateBy, rangeLength) {
    return assign({}, rangeToBeAdjusted, {
        start: normalizePositionByRangeLength(rangeToBeAdjusted.start + translateBy, rangeLength),
        end: normalizePositionByRangeLength(rangeToBeAdjusted.end + translateBy, rangeLength)
    });
};