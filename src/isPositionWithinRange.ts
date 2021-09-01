import { AnnRange } from "./types";

import { splitRangeIntoTwoPartsIfItIsCircular } from "./splitRangeIntoTwoPartsIfItIsCircular";
/**
 * 
 * @param {*} position //assumed to be a 0 based "caretPosition"
 * @param {*} range //0 based inclusive range
 * @param {*} sequenceLength 
 * @param {*} includeEdges - (default false) whether or not to say 
 */
export function isPositionWithinRange(
  position: number,
  range: AnnRange,
  sequenceLength: number,
  includeStartEdge?: boolean,
  includeEndEdge?: boolean
) {
  const ranges = splitRangeIntoTwoPartsIfItIsCircular(range, sequenceLength);
  const positionFits = ranges.some(function (range) {
    if (includeStartEdge ? position < range.start : position <= range.start) {
      return false;
    } else {
      if (includeEndEdge ? position <= range.end + 1 : position <= range.end) {
        return true;
      } else {
        return false;
      }
    }
  });
  return positionFits;
}

