'use strict';

var getOverlapsOfPotentiallyCircularRanges = require('./getOverlapsOfPotentiallyCircularRanges');
var collapseOverlapsGeneratedFromRangeComparisonIfPossible = require('./collapseOverlapsGeneratedFromRangeComparisonIfPossible');
var zeroSubrangeByContainerRange = require('./zeroSubrangeByContainerRange');
var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');

module.exports = function getZeroedRangeOverlaps(annotation, selection, sequenceLength) {
  var overlaps = collapseOverlapsGeneratedFromRangeComparisonIfPossible(getOverlapsOfPotentiallyCircularRanges(annotation, selection, sequenceLength), sequenceLength, annotation);
  var zeroedOverlaps = overlaps.map(function (overlap) {
    return zeroSubrangeByContainerRange(overlap, {
      start: selection.start,
      end: normalizePositionByRangeLength(selection.start - 1, sequenceLength)
    }, sequenceLength);
  });
  return zeroedOverlaps;
};