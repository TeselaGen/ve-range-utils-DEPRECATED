import { expandOrContractCircularRangeToPosition } from "./expandOrContractCircularRangeToPosition";
import { expandOrContractNonCircularRangeToPosition } from "./expandOrContractNonCircularRangeToPosition";
import { AnnRange } from "./types";
export function expandOrContractRangeToPosition(range: AnnRange, position: number, maxLength: number) {
    if (range.start > range.end) {
        return expandOrContractCircularRangeToPosition(range, position, maxLength)
    } else {
        return expandOrContractNonCircularRangeToPosition(range, position)
    }
}