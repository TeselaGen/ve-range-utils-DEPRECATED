import { checkIfNonCircularRangesOverlap } from "./checkIfNonCircularRangesOverlap";
import { splitRangeIntoTwoPartsIfItIsCircular } from "./splitRangeIntoTwoPartsIfItIsCircular";
import { AnnRange } from "./types";
export function checkIfPotentiallyCircularRangesOverlap(range: AnnRange, comparisonRange: AnnRange) {
  //split the potentially circular ranges and compare each part for overlap
  return splitRangeIntoTwoPartsIfItIsCircular(range, Infinity).some(function (splitRange) {
    return splitRangeIntoTwoPartsIfItIsCircular(comparisonRange, Infinity).some(function (splitComparisonRange) {
      return checkIfNonCircularRangesOverlap(splitRange, splitComparisonRange);
    })
  })
};

