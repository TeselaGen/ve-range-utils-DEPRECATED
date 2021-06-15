import { AnnRange } from "./types";

import { getRangeLength } from "./getRangeLength";
import { getOverlapsOfPotentiallyCircularRanges } from "./getOverlapsOfPotentiallyCircularRanges";
export function getLengthOfOverlappingRegionsBetweenTwoRanges(rangeA: AnnRange, rangeB: AnnRange, maxLength: number) {
    var overlaps = getOverlapsOfPotentiallyCircularRanges(rangeA, rangeB, maxLength)
    return overlaps.reduce(function (counter: number, overlap: AnnRange) {
        return counter + getRangeLength(overlap, maxLength)
    }, 0)
}