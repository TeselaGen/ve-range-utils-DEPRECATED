module.exports = function getRangeLength(range, rangeMax) {
    if (range.end < range.start) {
       return rangeMax - range.start + range.end + 1;
    } else {
       return range.end - range.start + 1;
    }
};