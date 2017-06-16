var getRangeLength = require('./getRangeLength');
module.exports = function getRangeAngles(range, rangeMax) {
	if (process.env.NODE_ENV !== "production") {
        if (rangeMax <= 0) {
    		console.error('Range max should never be less than or equal to 0')
    	}
        if (!isNumeric(rangeMax)) {
            debugger
        }
    }
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
