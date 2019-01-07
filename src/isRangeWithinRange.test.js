let isRangeWithinRange = require("./isRangeWithinRange");
let expect = require("chai").expect;

describe("isRangeWithinRange", function() {
  it("should correctly determine whether a position is within a range", function() {
    expect(isRangeWithinRange(null, { start: 1, end: 10 }, 100)).to.equal(
      false
    );
    expect(isRangeWithinRange({}, { start: 1, end: 10 }, 100)).to.equal(false);
    expect(isRangeWithinRange({ start: 5, end: 10 }, undefined, 100)).to.equal(
      false
    );
    expect(isRangeWithinRange(undefined, undefined, 100)).to.equal(false);
    expect(
      isRangeWithinRange({ start: 5, end: 10 }, { start: 1, end: 10 }, 100)
    ).to.equal(true);
    expect(
      isRangeWithinRange({ start: 5, end: 10 }, { start: -1, end: 10 }, 100)
    ).to.equal(false);
    expect(
      isRangeWithinRange({ start: 0, end: 10 }, { start: 0, end: 10 }, 100)
    ).to.equal(true);
    expect(
      isRangeWithinRange({ start: 10, end: 10 }, { start: 1, end: 10 }, 100)
    ).to.equal(true);
    expect(
      isRangeWithinRange({ start: 11, end: 10 }, { start: 0, end: 10 }, 100)
    ).to.equal(false);
    expect(
      isRangeWithinRange({ start: 12, end: 16 }, { start: 0, end: 10 }, 100)
    ).to.equal(false);
    expect(
      isRangeWithinRange({ start: 10, end: 5 }, { start: 10, end: 5 }, 100)
    ).to.equal(true);
    expect(
      isRangeWithinRange({ start: 10, end: 5 }, { start: 10, end: 5 }, 100)
    ).to.equal(true);
    expect(
      isRangeWithinRange({ start: 10, end: 5 }, { start: 10, end: 5 }, 100)
    ).to.equal(true);
    expect(
      isRangeWithinRange({ start: 0, end: 6 }, { start: 10, end: 5 }, 100)
    ).to.equal(false);
    expect(
      isRangeWithinRange({ start: 10, end: 6 }, { start: 10, end: 5 }, 100)
    ).to.equal(false);
  });
});
