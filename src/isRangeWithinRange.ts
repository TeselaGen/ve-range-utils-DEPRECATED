//TNR: THIS METHOD ONLY WORKS FOR COMPARING 0-BASED RANGES!!!!!!
import { trimRangeByAnotherRange } from "./trimRangeByAnotherRange";
import { AnnRange } from "./types";
export function isRangeWithinRange(
  rangeToCheck: AnnRange,
  containingRange: AnnRange,
  maxLength: number
) {

  let ranges = trimRangeByAnotherRange(
    rangeToCheck,
    containingRange,
    maxLength
  );
  if (ranges === null) return false
  return !ranges;
};
