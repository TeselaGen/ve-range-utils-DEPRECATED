'use strict';

var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
var provideInclusiveOptions = require('./provideInclusiveOptions');

var _require = require("lodash"),
    assign = _require.assign;

module.exports = provideInclusiveOptions(modulateRangeBySequenceLength);

function modulateRangeBySequenceLength(range, seqLen) {
    return assign(range, {
        start: normalizePositionByRangeLength(range.start, seqLen),
        end: normalizePositionByRangeLength(range.end, seqLen)
    });
}