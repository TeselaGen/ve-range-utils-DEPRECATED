import { AnnRange } from "./types";

import { normalizePositionByRangeLength } from "./normalizePositionByRangeLength";
import { getRangeLength } from "./getRangeLength";
export function getEachPositionInRangeAsArray(range: AnnRange, rangeMax: number) {
    var output: number[] = []
    var length = getRangeLength(range, rangeMax)
    if (!(length > 0)) {
        return output
    }
    for (var i = range.start; i < (length + range.start); i++) {
        var position = normalizePositionByRangeLength(i, rangeMax)
        output.push(position)
    }
    return output
}
