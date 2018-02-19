// const ac = require('ve-api-check'); 
const { assign } = require("lodash");

module.exports = function adjustRangeToRotation(rangeToBeAdjusted, rotateTo, rangeLength) {
    // ac.throw([ac.range, ac.posInt, ac.posInt], arguments);
    const newRange = assign({}, rangeToBeAdjusted, {
        start: mod(rangeToBeAdjusted.start - rotateTo, rangeLength),
        end: mod(rangeToBeAdjusted.end - rotateTo, rangeLength)
    });
   
    return newRange;
};


function mod(n, m) {
    return (n % m + m) % m;
  }
  