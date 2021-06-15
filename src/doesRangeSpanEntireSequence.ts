import { getRangeLength } from "./getRangeLength";
import { AnnRange } from "./types";
export function doesRangeSpanEntireSequence(range: AnnRange, sequenceLength: number) {
  if (getRangeLength(range, sequenceLength) === sequenceLength) {
    return true
  }
  return false
}