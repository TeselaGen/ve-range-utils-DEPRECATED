import { normalizePositionByRangeLength } from "./normalizePositionByRangeLength";
import { provideInclusiveOptions } from "./provideInclusiveOptions";
import { assign } from "lodash";
import { AnnRange } from "./types";
export const modulateRangeBySequenceLength = provideInclusiveOptions(_modulateRangeBySequenceLength)

function _modulateRangeBySequenceLength(range: AnnRange, seqLen: number) {
    return assign(range, {
        start: normalizePositionByRangeLength(range.start, seqLen),
        end: normalizePositionByRangeLength(range.end, seqLen)
    })
}
