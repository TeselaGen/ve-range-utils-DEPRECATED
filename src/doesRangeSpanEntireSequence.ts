var getRangeLength = require('./getRangeLength');
export function doesRangeSpanEntireSequence (range, sequenceLength) {
  if (getRangeLength(range) === sequenceLength) {
  	return true
  }
}