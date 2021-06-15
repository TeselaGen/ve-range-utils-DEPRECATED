import { AnnRange } from "./types";

import { getEachPositionInRangeAsArray } from "./getEachPositionInRangeAsArray";
export function loopEachPositionInRange(range: AnnRange, rangeMax: number, func: (pos: number, i: number) => any) {
    getEachPositionInRangeAsArray(range, rangeMax).map(func)
}
