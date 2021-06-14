import { AnnRange } from "./types";

export  function getOverlapOfNonCircularRanges(rangeA: AnnRange, rangeB: AnnRange) {
    if (rangeA.start < rangeB.start) {
        if (rangeA.end < rangeB.start) {
            //no overlap
            return undefined
        } else {
            if (rangeA.end < rangeB.end) {
                return {
                    start: rangeB.start,
                    end: rangeA.end
                };
            } else {
                return {
                    start: rangeB.start,
                    end: rangeB.end
                };
            }
        }
    } else {
        if (rangeA.start > rangeB.end) {
            //no overlap
            return undefined
        } else {
            if (rangeA.end < rangeB.end) {
                return {
                    start: rangeA.start,
                    end: rangeA.end
                };
            } else {
                return {
                    start: rangeA.start,
                    end: rangeB.end
                };
            }
        }
    }
}