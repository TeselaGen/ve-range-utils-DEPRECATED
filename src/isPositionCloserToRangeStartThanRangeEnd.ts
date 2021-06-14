//function to calculate whether a position is closer to the range start than the range end
var getShortestDistanceBetweenTwoPositions = require('./getShortestDistanceBetweenTwoPositions')
export function isPositionCloserToRangeStartThanRangeEnd(position, range, maxLength) {
    var distanceFromStart = getShortestDistanceBetweenTwoPositions(range.start, position, maxLength)
    var distanceFromEnd = getShortestDistanceBetweenTwoPositions(range.end, position, maxLength)
    return distanceFromStart <= distanceFromEnd
}
