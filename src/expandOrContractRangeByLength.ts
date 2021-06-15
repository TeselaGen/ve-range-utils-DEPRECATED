import { clone } from "lodash";
import { normalizeRange } from "./normalizeRange";
import { AnnRange } from "./types";
export function expandOrContractRangeByLength(range: AnnRange, shiftBy: number, shiftStart: boolean, sequenceLength: number) {
    var rangeToReturn = clone(range)
    if (shiftStart) {
        rangeToReturn.start -= shiftBy
    } else {
        rangeToReturn.end += shiftBy
    }
    return normalizeRange(rangeToReturn, sequenceLength)
}