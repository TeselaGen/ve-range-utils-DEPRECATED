
import assert from "assert"
import { loopEachPositionInRange } from "../src"
describe('loopEachPositionInRange', function () {
    it(`should loop the range`, () => {
        loopEachPositionInRange({ start: 2, end: 5 }, 19, (pos, i) => {
            assert(pos === i + 2)
        })
    })
})
