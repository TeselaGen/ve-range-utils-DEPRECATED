var modulatePositionByRange = require('./modulatePositionByRange');
export function normalizePositionByRangeLength1Based (position, sequenceLength) {
  return modulatePositionByRange(position, {start: 1, end: sequenceLength})
}