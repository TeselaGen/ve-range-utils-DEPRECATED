var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
// module.exports = wrapInvertRange(invertRange)
module.exports = function invertRange(range, rangeMax, options) {
    options = options || {}
    var newRange = {
        start: range.start,
        end: range.end
    }
    if (options.inclusive1BasedEnd) newRange.end--
    if (options.inclusive1BasedStart) newRange.start--
    
    //invert the range! (everything is 0 based here )
    var start = newRange.end + 1;
    var end = newRange.start - 1;
    
    
    var rangeToReturn = {
        start: normalizePositionByRangeLength(start, rangeMax, false),
        end: normalizePositionByRangeLength(end, rangeMax, false),
    }
    
    if (options.inclusive1BasedEnd) rangeToReturn.end++
    if (options.inclusive1BasedStart) rangeToReturn.start++
    return rangeToReturn
}


// function rangeOptions() {
//     
//     var newRange = {
//         start: range.start,
//         end: range.end
//     }
//     if (options.inclusive1BasedEnd) newRange.end--
//     if (options.inclusive1BasedStart) newRange.start--
//     
// }
