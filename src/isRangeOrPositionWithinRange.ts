import { AnnRange } from "./types";

import { isObject } from "lodash";
import { isRangeWithinRange } from "./isRangeWithinRange";
import { isPositionWithinRange } from "./isPositionWithinRange";

export function isRangeOrPositionWithinRange(
  rangeOrPositionToCheck: AnnRange | number,
  containingRange: AnnRange,
  maxLength: number,
  includeStartEdge: boolean,
  includeEndEdge: boolean
) {

  if (rangeOrPositionToCheck === undefined || rangeOrPositionToCheck === null ||
    containingRange === undefined || containingRange === null) {
    return false
  }
  if (isObject(rangeOrPositionToCheck)) {
    return isRangeWithinRange(rangeOrPositionToCheck,
      containingRange,
      maxLength)
  } else {
    return isPositionWithinRange(rangeOrPositionToCheck,
      containingRange,
      maxLength,
      includeStartEdge,
      includeEndEdge)
  }

};
