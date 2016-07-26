var splitRangeIntoTwoPartsIfItIsCircular = require('./splitRangeIntoTwoPartsIfItIsCircular')
module.exports = function isPositionWithinRange(position, range, sequenceLength) {
    var ranges = splitRangeIntoTwoPartsIfItIsCircular(range, sequenceLength) 
    var positionFits = ranges.some(function (range) {
      if (position <= range.start) {
        return false
      } else {
        if (position <= range.end) {
          return true
        } else {
          return false
        }
      }
    })
    return positionFits
    
}
