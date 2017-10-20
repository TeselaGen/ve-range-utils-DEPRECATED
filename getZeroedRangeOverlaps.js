
const getOverlapsOfPotentiallyCircularRanges = require('./getOverlapsOfPotentiallyCircularRanges')
const collapseOverlapsGeneratedFromRangeComparisonIfPossible = require('./collapseOverlapsGeneratedFromRangeComparisonIfPossible')
const zeroSubrangeByContainerRange = require('./zeroSubrangeByContainerRange')
const normalizePositionByRangeLength = require('./normalizePositionByRangeLength')

module.exports = function getZeroedRangeOverlaps (annotation, selection, sequenceLength)  {
  const overlaps = collapseOverlapsGeneratedFromRangeComparisonIfPossible(getOverlapsOfPotentiallyCircularRanges(annotation, selection, sequenceLength), sequenceLength)
  console.log('overlaps:',overlaps)
  const zeroedOverlaps = overlaps.map((overlap) => {
    console.log('selection.start:',selection.start)
    console.log('sequenceLength:',sequenceLength)
    return zeroSubrangeByContainerRange(overlap, {
      start: selection.start,
      end: normalizePositionByRangeLength(selection.start - 1, sequenceLength)
    }, sequenceLength)
  })
  console.log('zeroedOverlaps:',zeroedOverlaps)
  return zeroedOverlaps
}