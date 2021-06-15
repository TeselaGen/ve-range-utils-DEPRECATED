
import { getOverlapsOfPotentiallyCircularRanges } from "./getOverlapsOfPotentiallyCircularRanges";
import { collapseOverlapsGeneratedFromRangeComparisonIfPossible } from "./collapseOverlapsGeneratedFromRangeComparisonIfPossible";
import { zeroSubrangeByContainerRange } from "./zeroSubrangeByContainerRange";
import { normalizePositionByRangeLength } from "./normalizePositionByRangeLength";
import { AnnRange } from "./types";

//gets the overlapping sections of two ranges and zeroes them to their first point of intersection!
export function getZeroedRangeOverlaps(annotation: AnnRange, selection: AnnRange, sequenceLength: number) {
  const overlaps = collapseOverlapsGeneratedFromRangeComparisonIfPossible(getOverlapsOfPotentiallyCircularRanges(annotation, selection, sequenceLength), sequenceLength, annotation)
  const zeroedOverlaps = overlaps.map((overlap) => {
    return zeroSubrangeByContainerRange(overlap, {
      start: selection.start,
      end: normalizePositionByRangeLength(selection.start - 1, sequenceLength)
    }, sequenceLength)
  })
  return zeroedOverlaps
}