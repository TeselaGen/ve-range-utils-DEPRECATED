'use strict';

var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
var provideInclusiveOptions = require('./provideInclusiveOptions');
module.exports = provideInclusiveOptions(invertRange);
function invertRange(rangeOrCaret, rangeMax) {
	if (rangeOrCaret.start > -1) {
		var start = rangeOrCaret.end + 1;
		var end = rangeOrCaret.start - 1;
		return {
			start: normalizePositionByRangeLength(start, rangeMax, false),
			end: normalizePositionByRangeLength(end, rangeMax, false)
		};
	} else {
		if (rangeOrCaret > -1) {
			return {
				start: normalizePositionByRangeLength(rangeOrCaret, rangeMax, false),
				end: normalizePositionByRangeLength(rangeOrCaret - 1, rangeMax, false)
			};
		}
	}
}