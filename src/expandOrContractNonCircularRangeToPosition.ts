import { assign } from "lodash";
import { AnnRange } from "./types";
export function expandOrContractNonCircularRangeToPosition(range: AnnRange, position: number) {
    var newRange = assign({}, range);
    var endMoved = true;
    if (range.start > position) {
        newRange.start = position;
        endMoved = false;
    } else {
        if (range.end < position) {
            newRange.end = position - 1;
        } else {
            if (position - range.start > range.end - position) {
                newRange.end = position - 1;
            } else {
                newRange.start = position;
                endMoved = false;
            }
        }
    }
    return ({
        newRange: newRange,
        endMoved: endMoved
    })
}