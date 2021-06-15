//function to calculate whether a position is closer to the range start than the range end
import { getShortestDistanceBetweenTwoPositions } from "./getShortestDistanceBetweenTwoPositions";
import { AnnRange } from "./types";
export function isPositionCloserToRangeStartThanRangeEnd(position: number, range: AnnRange, maxLength: number) {
    var distanceFromStart = getShortestDistanceBetweenTwoPositions(range.start, position, maxLength)
    var distanceFromEnd = getShortestDistanceBetweenTwoPositions(range.end, position, maxLength)
    return distanceFromStart <= distanceFromEnd
}
