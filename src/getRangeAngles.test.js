//0123456789
//r--------r
//
//0123
//r--r
//  0
// 3 1
//  2
var getRangeAngles = require('./getRangeAngles');
var assert = require('assert');
describe('getRangeAngles', function () {
	it('should return the correct angles for ranges that cross the origin', function (done) {
		var angles = getRangeAngles({start: 9,end:0},10)
		// console.log('angles: ' + JSON.stringify(angles,null,4));
		var anglesInRadians = {};
		Object.keys(angles).forEach(function(key){
			anglesInRadians[key] = angles[key]*360/Math.PI/2
		});
		assert(anglesInRadians.startAngle === 324)
		assert(anglesInRadians.endAngle === 36)
		assert(anglesInRadians.totalAngle === 72)
		// console.log('anglesInRadians: ' + JSON.stringify(anglesInRadians,null,4));
		done()
	});
	it('should return the correct angles for ranges that do not cross the origin', function (done) {
		var angles = getRangeAngles({start: 1,end:2},10)
		// console.log('angles: ' + JSON.stringify(angles,null,4));
		var anglesInRadians = {};
		Object.keys(angles).forEach(function(key){
			anglesInRadians[key] = angles[key]*360/Math.PI/2
		});
		// console.log('anglesInRadians: ' + JSON.stringify(anglesInRadians,null,4));
		assert(anglesInRadians.startAngle === 36)
		assert(anglesInRadians.endAngle === 108)
		assert(anglesInRadians.totalAngle === 72)
		done()
	});
});

