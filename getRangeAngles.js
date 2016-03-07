var getRangeLength = require('./getRangeLength');
module.exports = function getRangeAngles(range, rangeMax) {
    var rangeLength = getRangeLength(range, rangeMax);
    var startAngle = 2 * Math.PI * (range.start / rangeMax)
    var totalAngle = rangeLength / rangeMax * Math.PI * 2
    return {
                startAngle: startAngle,
                endAngle: 2 * Math.PI * (range.end + 1) / rangeMax, //use a +1 here because the angle must encompass the end of the annotation
                totalAngle: totalAngle,
                centerAngle: startAngle + totalAngle/2 
            }
};

