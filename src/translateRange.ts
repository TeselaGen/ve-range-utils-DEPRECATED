import { AnnRange } from "./types";

import { assign } from "lodash";
import { normalizePositionByRangeLength } from "./normalizePositionByRangeLength";

export function translateRange(rangeToBeAdjusted: AnnRange, translateBy: number, rangeLength: number) {
    return assign({}, rangeToBeAdjusted, {
        start: normalizePositionByRangeLength(rangeToBeAdjusted.start + translateBy, rangeLength),
        end: normalizePositionByRangeLength(rangeToBeAdjusted.end + translateBy, rangeLength)
    });
};