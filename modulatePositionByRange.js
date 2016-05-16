// var ac = require('ve-api-check');
// ac.throw([ac.posInt, ac.posInt, ac.bool], arguments);
module.exports = function modulatePositionByRange(position, range) {
    var returnVal = position
    if (position < range.start) {
      returnVal = range.end - (range.start - (position + 1))
    } else if (position > range.end) {
      returnVal = range.start + (position - range.end - 1)
    }
    return returnVal
};
