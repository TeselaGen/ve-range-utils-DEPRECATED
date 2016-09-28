var modulatePositionByRange = require('./modulatePositionByRange');
module.exports = function normalizePositionByRangeLength1Based (position, selectionLayer, sequenceLength) {
  return modulatePositionByRange(position, {start: 1, end: sequenceLength})
}