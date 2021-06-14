var getEachPositionInRangeAsArray = require('./getEachPositionInRangeAsArray');
export function loopEachPositionInRange(range, rangeMax, func) {
    getEachPositionInRangeAsArray(range,rangeMax).map(func)
}
