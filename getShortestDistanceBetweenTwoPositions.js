module.exports = function getShortestDistanceBetweenTwoPositions(position1, position2, maxLength) {
  if (position1 < position2) {
    position1 = -position1
  } else {
    position2 = -position2
  }
  var distanceFromStart1 = position2 + position1
  var distanceFromStart2 = position1 + maxLength + position2
  return Math.min(distanceFromStart1,distanceFromStart2)
}
