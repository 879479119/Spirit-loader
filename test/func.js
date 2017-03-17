/**
 * @author RockSAMA
 * @description just a test demo
 */

require('should')
require("mocha")

function demo(argv) {
	return argv > 5
}

function cover(judge) {
	switch (judge){
		case 1: return 0
		case 2: return 1
		default: return 2
	}
}

describe("Test1",function () {
	it("should return true", function () {
		demo(10).should.eql(true)
	});
	// it("should return false", function () {
	// 	demo(3).should.eql(false)
	// });
})

describe("Test2",function () {
	it("should return 0", function () {
		cover(1).should.eql(0)
	});
	it("should return 1", function () {
		cover(2).should.eql(1)
	});
	it("should return 2", function () {
		cover(3).should.eql(2)
	});
})