import { AnnRange } from "./types";

//takes a potentially circular range and returns an array containing the range split on the origin
export  function splitRangeIntoTwoPartsIfItIsCircular(range: AnnRange, sequenceLength: number) {
    // ac.throw([ac.range, ac.number], arguments);
    if (sequenceLength !== 0) {
        sequenceLength = sequenceLength || Infinity
    }
    var ranges = [];
    if (range.start > range.end) {
        //the range is cicular, so we return an array of two ranges
        ranges.push({
            start: 0,
            end: range.end,
            type: "end",
        });
        ranges.push({
            start: range.start,
            end: sequenceLength - 1,
            type: "beginning",
        });
    } else {
        //the range isn't circular, so we just return the range
        ranges.push({
            start: range.start,
            end: range.end,
            type: "beginningAndEnd",
        });
    }
    return ranges;
}
