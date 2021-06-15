import { convertRangeIndices } from "./convertRangeIndices";
import { AnnRange } from "./types";
export function convertRangeTo1Based(range: AnnRange) {
  return convertRangeIndices(range, undefined, { inclusive1BasedStart: true, inclusive1BasedEnd: true })
}