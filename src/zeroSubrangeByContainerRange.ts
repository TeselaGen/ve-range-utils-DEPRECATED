
// ac.throw([ac.posInt, ac.posInt, ac.bool], arguments);
import { trimRangeByAnotherRange } from "./trimRangeByAnotherRange";
import { AnnRange } from "./types";
/**
 * "zeroes" a subrange of a container range by 
 * adjusting subRange start and end such that it is as if the container range start = 0.
 * @param  {object} subRange  {start:
 *                                     end:
 *                                     }
 * @param  {object} containerRange {start:
 *                                     end:
 *                                     }
 * @param  {int} sequenceLength 
 * @return {object}                {start:
 *                                     end:
 *                                     }
 */
export function zeroSubrangeByContainerRange(subRange: AnnRange, containerRange: AnnRange, sequenceLength: number) {
    // ac.throw([ac.range, ac.range, ac.posInt], arguments);
    //first check to make sure the container range fully contains the subRange
    var trimmedSubRange = trimRangeByAnotherRange(subRange, containerRange, sequenceLength);
    if (trimmedSubRange) {
        throw new Error('subRange must be fully contained by containerRange! Otherwise this function does not make sense');
    }
    var newSubrange: AnnRange = { start: 0, end: 0 };
    newSubrange.start = subRange.start - containerRange.start;
    newSubrange.end = subRange.end - containerRange.start;
    if (newSubrange.start < 0) {
        newSubrange.start += sequenceLength;
    }
    if (newSubrange.end < 0) {
        newSubrange.end += sequenceLength;
    }
    return newSubrange;
};