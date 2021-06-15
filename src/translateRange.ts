import { AnnRange } from "./types";

const { assign } = require("lodash");
var normalizePositionByRangeLength = require('./normalizePositionByRangeLength');
export function translateRange(rangeToBeAdjusted: AnnRange, translateBy: number, rangeLength: number) {
    return assign({}, rangeToBeAdjusted, {
        start: normalizePositionByRangeLength(rangeToBeAdjusted.start + translateBy, rangeLength),
        end: normalizePositionByRangeLength(rangeToBeAdjusted.end + translateBy, rangeLength)
    });
};