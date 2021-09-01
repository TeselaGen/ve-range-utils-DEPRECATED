import { AnnRange } from "./types";

import { isObject } from "lodash";
import { isRangeWithinRange } from "./isRangeWithinRange";
import { isPositionWithinRange } from "./isPositionWithinRange";

export function isRangeOrPositionWithinRange(
  rangeOrPositionToCheck: null | AnnRange | number,
  containingRange: AnnRange,
  maxLength?: number,
  includeStartEdge?: boolean,
  includeEndEdge?: boolean
) {

  if (rangeOrPositionToCheck === undefined || rangeOrPositionToCheck === null ||
    containingRange === undefined || containingRange === null) {
    return false
  }
  if (isObject(rangeOrPositionToCheck)) {
    return isRangeWithinRange(rangeOrPositionToCheck,
      containingRange,
      maxLength || Infinity)
  } else {
    return isPositionWithinRange(rangeOrPositionToCheck,
      containingRange,
      maxLength || Infinity,
      includeStartEdge,
      includeEndEdge)
  }

};
