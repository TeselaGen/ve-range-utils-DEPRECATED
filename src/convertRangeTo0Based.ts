import { convertRangeIndices } from "./convertRangeIndices";
import { AnnRange } from "./types";
export function convertRangeTo0Based(range: AnnRange) {
  return convertRangeIndices(range, { inclusive1BasedStart: true, inclusive1BasedEnd: true })
}