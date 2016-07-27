var getShortestDistanceBetweenTwoPositions = require('./getShortestDistanceBetweenTwoPositions')
module.exports = function isPositionCloserToRangeStartThanRangeEnd(position, range, maxLength) {
    debugger
    var distanceFromStart = getShortestDistanceBetweenTwoPositions(range.start, position, maxLength)
    var distanceFromEnd = getShortestDistanceBetweenTwoPositions(range.end, position, maxLength)
    return distanceFromStart <= distanceFromEnd
}
