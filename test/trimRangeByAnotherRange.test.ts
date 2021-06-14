import { trimRangeByAnotherRange } from "../src";
import assert from "assert";
describe("trimRangeByAnotherRange", function () {
  it("trims non circular ranges that dont fully overlap", function () {
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 0,
          end: 2,
          name: "happy"
        },
        {
          start: 2,
          end: 2
        },
        10
      ),
      {
        start: 0,
        end: 1,
        name: "happy"
      }
    );
  });
  it("it does not trim non circular ranges with overlap contained within it", function () {
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 0,
          end: 10,
          name: "happy"
        },
        {
          start: 2,
          end: 2
        },
        10
      ),
      {
        start: 0,
        end: 10,
        name: "happy"
      }
    );
  });
  it("trims non circular ranges that fully overlap", function () {
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 0,
          end: 2
        },
        {
          start: 0,
          end: 2
        },
        10
      ),
      null
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 5
        },
        {
          start: 3,
          end: 5
        },
        10
      ),
      null
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 3
        },
        {
          start: 3,
          end: 3
        },
        10
      ),
      null
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 0,
          end: 0
        },
        {
          start: 0,
          end: 3
        },
        10
      ),
      null
    );
  });
  it("does not trim non circular ranges that dont overlap", function () {
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 0,
          end: 2
        },
        {
          start: 5,
          end: 6
        },
        10
      ),
      {
        start: 0,
        end: 2
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 5,
          name: "happy"
        },
        {
          start: 0,
          end: 0
        },
        10
      ),
      {
        start: 3,
        name: "happy",
        end: 5
      }
    );
  });
  it("does trim circular ranges that overlap", function () {
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          name: "happy",
          end: 2
        },
        {
          start: 5,
          end: 6
        },
        10
      ),
      {
        start: 3,
        name: "happy",
        end: 2
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 2
        },
        {
          start: 3,
          end: 6
        },
        10
      ),
      {
        start: 7,
        end: 2
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 2
        },
        {
          start: 1,
          end: 6
        },
        10
      ),
      {
        start: 7,
        end: 0
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 2
        },
        {
          start: 0,
          end: 6
        },
        10
      ),
      {
        start: 7,
        end: 9
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 2
        },
        {
          start: 2,
          end: 9
        },
        10
      ),
      {
        start: 0,
        end: 1
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 2
        },
        // rrrrrrrrrr
        // 0123456789
        // --es------ 
        // --e s----- 
        {
          start: 4,
          end: 2
        },
        10
      ),
      {
        start: 3,
        end: 3
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 1,
          end: 2
        },
        {
          start: 4,
          end: 1
        },
        10
      ),
      {
        start: 2,
        end: 2
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 1,
          end: 5
        },
        {
          start: 4,
          end: 1
        },
        10
      ),
      {
        start: 2,
        end: 3
      }
    );
    assert.deepStrictEqual(
      trimRangeByAnotherRange(
        {
          start: 3,
          end: 2
        },
        {
          start: 3,
          end: 2
        },
        10
      ),
      null
    );
  });
});
