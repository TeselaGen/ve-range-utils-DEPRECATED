import { AnnRange } from "./types";

export function doesRangeSpanOrigin(range: AnnRange) {
  return range.start > range.end
}