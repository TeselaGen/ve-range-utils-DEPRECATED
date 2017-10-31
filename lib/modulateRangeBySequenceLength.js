'use strict';

var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
var provideInclusiveOptions = require('./provideInclusiveOptions');
var assign = require('lodash/object/assign');
module.exports = provideInclusiveOptions(modulateRangeBySequenceLength);

function modulateRangeBySequenceLength(range, seqLen) {
    return assign(range, {
        start: normalizePositionByRangeLength(range.start, seqLen),
        end: normalizePositionByRangeLength(range.end, seqLen)
    });
}